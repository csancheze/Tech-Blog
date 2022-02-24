const newFormHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
  
    const content = document.querySelector('#update-comment').value.trim();
  
        if (content) {
        const response = await fetch(`/api/comments/${id}`, {
            method: 'PUT',
            body: JSON.stringify({content}),
            headers: {
            'Content-Type': 'application/json',
            },
        });
    
        if (response.ok) {
            alert('Your comment was updated')
            window.location = document.referrer
        } else {
            alert('Failed to update comment');
        }
        }
    }
};
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        alert('Your comment was deleted')
        window.location = document.referrer
      } else {
        alert('Failed to delete comment');
      }
    }
  };
  
  document
    .querySelector('#comment-update-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('#delete')
    .addEventListener('click', delButtonHandler);
  