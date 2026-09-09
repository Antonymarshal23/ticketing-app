import express from 'express';

const router = express.Router();

router.post('/api/customers/signout', (req, res) => {
  req.session = null;

  res.send({});
});

export { router as signoutCustomerRouter };
