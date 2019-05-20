
function takeANumber(deliLine, customer)
{
 
  
  if( deliLine === null)
  {
    deliLine = deliLine.unshift(customer);
  }
  else
  {
    deliLine = deliLine.push(customer)
  }
  var welcomeMessage = `Welcome, + ${name}. You are number ${customer.length} in line.`;
  console.log(welcomeMessage);
}

function nowServing ()