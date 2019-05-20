
function takeANumber(deliLine, newCustomer)
{
  deliLine.push(newCustomer);
  
  if( deliLine === null)
  {
    deliLine.unshift(newCustomer);
  }
  var welcomeMessage = `Welcome, + ${name}. You are number ${newCustomer.length} in line.`;
  console.log(welcomeMessage);
}