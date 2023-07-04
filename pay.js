let upi = [
  {
    mobile: "8287395807",
    id: "8287395807@paytm",
    balance: 50000,
  },
  {
    mobile: "8871778182",
    id: "8871778182@ybl",
    balance: 40000,
  },
  {
    mobile: "9826153819",
    id: "9826153819@axis",
    balance: 30000,
  },
  {
    mobile: "7000628392",
    id: "7000628392@gpay",
    balance: 20000,
  },
];
module.exports = { payment };

//Task 1 - first check mobile number
//Task

function checkUpi(mobile) {
  for (i = 0; i < upi.length; i++) {
    if (mobile == upi[i].mobile) return upi[i];
  }
  return "No UPI ID found on this number";
}

function payment(mobile, toMobile, amount) {
  let sMatch = false;
  let rMatch = false;
  let aMatch = false;
  let save = [];
  let sender = checkUpi(mobile);
  let receiver = checkUpi(toMobile);
  const getBal = sender.balance;

  if (mobile == sender.mobile) {
    sMatch = true;
    if (toMobile == receiver.mobile) {
      rMatch = true;
    }
    if (amount) {
      if (amount <= getBal) aMatch = true;
    }
  } 

  if (!sMatch) return "sender's UPI ID has not found on this number";
  if (!rMatch) return "receiver's UPI ID has not found on this number";
  if(!amount) return"please provide amount"
  if (!aMatch) return "insufficient funds in your account";
  if (aMatch)
    return (
      "your account is debited with RS " +
      amount +
      " and credited to " +
      receiver.mobile
    );
}
