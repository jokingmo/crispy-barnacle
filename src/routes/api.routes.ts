import { Router } from 'express';
import { authMiddleware, roleMiddleware } from '../middleware/auth.middleware';
import * as attendanceController from '../controllers/attendance.controller';
import * as leaveController from '../controllers/leave.controller';
import * as financialController from '../controllers/financial.controller';

const router = Router();

// ========== 考勤相关路由 ==========

// 标记考勤 (教师)
router.post(
  '/attendance/mark',
  authMiddleware,
  roleMiddleware('teacher', 'admin'),
  attendanceController.markAttendance
);

// 确认缺勤 (家长)
router.post(
  '/attendance/confirm-absence',
  authMiddleware,
  roleMiddleware('parent'),
  attendanceController.confirmAbsence
);

// 查询考勤记录
router.get(
  '/attendance/range',
  authMiddleware,
  attendanceController.getAttendanceByDateRange
);

// 班级考勤统计
router.get(
  '/attendance/class-summary',
  authMiddleware,
  roleMiddleware('teacher', 'admin'),
  attendanceController.getClassAttendanceSummary
);

// 未确认缺勤列表 (家长)
router.get(
  '/attendance/unconfirmed',
  authMiddleware,
  roleMiddleware('parent'),
  attendanceController.getUnconfirmedAbsences
);

// ========== 请假相关路由 ==========

// 提交请假申请 (家长)
router.post(
  '/leave/submit',
  authMiddleware,
  roleMiddleware('parent'),
  leaveController.submitLeaveRequest
);

// 审批请假申请 (教师)
router.post(
  '/leave/approve',
  authMiddleware,
  roleMiddleware('teacher', 'admin'),
  leaveController.approveLeaveRequest
);

// 查询请假申请 (家长)
router.get(
  '/leave/by-child',
  authMiddleware,
  roleMiddleware('parent'),
  leaveController.getLeaveRequestsByChild
);

// 待审批请假列表 (教师)
router.get(
  '/leave/pending',
  authMiddleware,
  roleMiddleware('teacher', 'admin'),
  leaveController.getPendingLeaveRequests
);

// ========== 财务相关路由 ==========

// 计算月度财务 (财务/园长)
router.post(
  '/financial/calculate-monthly',
  authMiddleware,
  roleMiddleware('finance', 'principal', 'admin'),
  financialController.calculateMonthlyFinancials
);

// 获取幼儿月度财务 (家长/教师/财务)
router.get(
  '/financial/child-monthly',
  authMiddleware,
  financialController.getChildMonthlyFinancial
);

// 获取班级月度财务 (教师/财务/园长)
router.get(
  '/financial/class-monthly',
  authMiddleware,
  roleMiddleware('teacher', 'finance', 'principal', 'admin'),
  financialController.getClassMonthlyFinancial
);

// 获取全园月度财务 (财务/园长)
router.get(
  '/financial/kindergarten-monthly',
  authMiddleware,
  roleMiddleware('finance', 'principal', 'admin'),
  financialController.getKindergartenMonthlyFinancial
);

// 生成月度报告 (财务/园长)
router.get(
  '/financial/generate-report',
  authMiddleware,
  roleMiddleware('finance', 'principal', 'admin'),
  financialController.generateMonthlyReport
);

export default router;
