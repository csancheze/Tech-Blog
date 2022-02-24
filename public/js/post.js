const newFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#post-comment').value.trim();
  const date_created = new Date();
  const post_id = document.querySelector("#post").getAttribute('data-id')
  console.log(post_id)


  if (content && date_created && post_id) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({content, date_created, post_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`${post_id}`);
    } else {
      alert('Failed to create comment');
    }
  } else {
    alert('Write something!')
  }
};


document.querySelector('#comment-form').addEventListener('submit', newFormHandler);