"use server";
//This function is placeholder dummy function for sending input data to a server
export async function createInput( prevState: {message: string;},formData: FormData,)
{

  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log(formData.get('fname')); //get just the value of formData fname
  //formData is the input data from the textarea

  //This is where you could call external api
  
  return {message: "new" }; //returning form input value to caller
}