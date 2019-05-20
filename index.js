
function takeANumber(deliLine, customer)
{
 
  
  if( deliLine === null)
  {
    deliLine.unshift(customer);
  }
  else
  {
    deliLine.push(customer)
  }
  var welcomeMessage = `Welcome, ${customer}. You are number ${deliLine.length} in line.`;

  return welcomeMessage;
}

function nowServing (deliLine, customer)
{
  if(nowServing === undefined)
  {
    return "There is nobody waiting to be served!"
  }
  
}