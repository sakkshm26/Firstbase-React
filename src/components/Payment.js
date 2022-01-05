import React, { useEffect } from 'react';
import axios from 'axios';

function Payment() {

  const loadScript = (src/* :any */) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  async function makePayment() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('RAZORPAY SDK Failed to load');
      return;
    }

    // const response = await fetch("http://localhost:8080?r=jprimary/makepayment");
    // const response = await axios("http://35.154.218.194/index.php?r=jprimary/makepayment");
    // const response = axios.post("http://35.154.218.194/index.php?r=jprimary/verifypayment");

    var bodyFormData = new FormData();
    bodyFormData.append('company_id', '1');

    const response = await axios({
      method: 'post',
      // url: BASE_URL + 'juser/getinvolved',
      url: 'http://35.154.218.194/index.php?r=jprimary/makepayment',
      data: bodyFormData,
    });

    if (!response.ok) {
      console.log('Error occured in response');
    }
    console.log(response);
    const orderDetails = await response.data;

    const options = {
      "key": "rzp_test_Ksvh1a7lO9kMNS",
      "amount": orderDetails['order_data']['amount'],
      "currency": "INR",
      "name": "Business Setup",
      "description": "Incorporation",
      "image": "https://example.com/your_logo",
      "order_id": orderDetails['order_id'],
      "handler": async function (response/* :any */) {
        /* alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature); */ //Passing these three with company_ID apis r=jprimary/verifypayment

        //Send all these details to backend alongwith company_id

        var bodyData = new FormData();
        bodyData.append('company_id', 1);
        bodyData.append('razorpay_payment_id', response.razorpay_payment_id);
        bodyData.append('razorpay_order_id', response.razorpay_order_id);
        bodyData.append('razorpay_signature', response.razorpay_signature);

        const response2 = await axios({
          method: 'post',
          // url: BASE_URL + 'juser/getinvolved',
          url: 'https://admin.businesssetup.in/index.php?r=jprimary/verifypayment',
          data: bodyData,
        });

        if (!response2.ok) {
          console.log('Error occured in response2');
        }
        console.log(response2);
      },
      "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "8806058274"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#c53605"
      }
    }; 

    var rzp1 = new (window /* as any */).Razorpay(options);
    rzp1.open();
  }

  useEffect(() => {
    makePayment();
  }, [])

  return (
    <div>

    </div>
  )
}

export default Payment
