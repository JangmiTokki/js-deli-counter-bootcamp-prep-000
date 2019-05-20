
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
  var currentLine;
  if(line === undefined || line.length === 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    for(var i = 0; i < line.length; i++)
    {
      currentLine.push((i+1) + ". " + line[i]);
  }
}