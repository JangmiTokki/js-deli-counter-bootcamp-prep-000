
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

function nowServing (katzDeliLine)
{
  var currentCustomer = katzDeliLine[0];
  if(katzDeliLine === undefined || katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
    
  }
  
}