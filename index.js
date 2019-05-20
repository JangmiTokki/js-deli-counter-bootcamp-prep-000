
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
  var welcomeMessage = `Welcome,+${customer}. You are number${deliLine.length} in line.`;
  console.log(deliLine)
  console.log(welcomeMessage);
}

function nowServing ()
{
  if(nowServing === null)
  {
    return "the line is empty"
  }
}