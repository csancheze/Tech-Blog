const newFormHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id')

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#update-post').value.trim();
        if (title == ""){
          alert('Write an updated title')
        }
  
        if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content}),
            headers: {
            'Content-Type': 'application/json',
            },
        });

    
        if (response.ok) {
          alert('Your post was updated')
          window.location = document.referrer
        } else {
            alert('Failed to create post');
        }
        } 
    }
}
  
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        alert('Your post was deleted')
            window.location = document.referrer
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('#post-update-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('#delete')
    .addEventListener('click', delButtonHandler);
  