var customer = {
    checking: 0,
    savings: 0,
    deposit: function(amount) {
     customer.checking += amount;
    },
    transfer: function(amount) {
     customer.checking -= amount;
     customer.savings += amount;
    }
   };
   
   customer.deposit(1000);
   customer.transfer(200);
   console.log(customer);