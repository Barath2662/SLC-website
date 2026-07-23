import { Router } from 'express';
import { handleCreateEnquiry, handleListEnquiries } from '../controllers/enquiryController';

const router = Router();

router.post('/enquiry', handleCreateEnquiry);
router.get('/enquiries', handleListEnquiries);

export default router;
