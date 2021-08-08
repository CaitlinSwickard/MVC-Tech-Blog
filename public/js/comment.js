const newFormHandler = async (event) => {
  event.preventDefault();

  // gabbing html 
  const content = document.querySelector('#blog-desc').value;

   // create and post new comment page
   if (content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('yee')
      // document.location.replace('/dashboard');
    } else {
      alert('Failed to create comment');
    }
  }
};

// event listener for buttons
document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);