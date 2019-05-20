
function takeANumber(deliLine, newCustomer)
{
  deliLine.push(newCustomer);
  var welcomeMessage = `Welcome, + ${name}. You are number ${newCustomer.length} in line.`;
  console.log(welcomeMessage);
}