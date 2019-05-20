
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
  if(katzDeliLine === undefined)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    return "Currently serving" + katzDeliLine[0] + ".";
  }
  
}