import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.routes';
import { ScheduledTasks } from './tasks/scheduled.tasks';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ========== 中间件配置 ==========
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// ========== 路由配置 ==========
app.use('/api', apiRoutes);

// ========== 健康检查端点 ==========
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ========== 错误处理 ==========
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    code: 'INTERNAL_ERROR',
    message: '服务器内部错误',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// ========== 初始化定时任务 ==========
const scheduledTasks = new ScheduledTasks();
scheduledTasks.initializeScheduledTasks();

// ========== 启动服务器 ==========
app.listen(PORT, () => {
  console.log(`\n🚀 Kindergarten Attendance System started on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📅 Time: ${new Date().toISOString()}\n`);
});

export default app;
