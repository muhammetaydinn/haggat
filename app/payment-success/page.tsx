'use client';
import PaymentSuccess from '@/components/PaymentSuccess/PaymentSuccess';
import { Container } from '@mantine/core';
import React from 'react'

const PaymentSuccessPage = () => {
  return (
    <Container className='h-screen'>
      <PaymentSuccess />
    </Container>
  );
}

export default PaymentSuccessPage;