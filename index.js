
function takeANumber(deliLine, customer)
{
 
  
  if( deliLine === null)
  {
    deliLine.unshift(customer);
  }
  else
  {
    deliLine.push(customer);
  }
  var welcomeMessage = `Welcome, ${customer}. You are number ${deliLine.length} in line.`;

  return welcomeMessage;
}

function nowServing (katzDeliLine)
{
  var currentCustomer = katzDeliLine[0];
  if(katzDeliLine === undefined || katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
    
  }
  
}

function currentLine(line)
{
  var update;
  var currentLine;
  if(line === undefined || line.length === 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    update = "The line is currently";
    for(var j = 0; j < currentLine.length; j++)
    {
      update +=  ${currentLine[i]},`;
    }
  }
}