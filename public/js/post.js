const newFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#post-content').value.trim();
  const date = new Date();
  const post_id = document.querySelector("#post").getAttribute('data-id')


  if (content && date && post_id) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({content, date_created, post_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`posts/${post_id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};


document.querySelector('#comment-form').addEventListener('submit', newFormHandler);