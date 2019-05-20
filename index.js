
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
  var lineIsEmpty = false;
  if(katzDeliLine === undefined || katzDeliLine === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    return "Currently serving " + katzDeliLine[0] + ".";
  }
  
}