
document.addEventListener('DOMContentLoaded', function() { //wait, until HTML will load

    // LocalStorage (OS and browser info)
    function handleSystemInfo() {

        const currentSystemData = {
            os: navigator.platform,
            browser: navigator.userAgent
        };

        localStorage.setItem('userSystemInfo', JSON.stringify(currentSystemData));

        const savedDataString = localStorage.getItem('userSystemInfo');

        if (savedDataString) {
            
            const parsedData = JSON.parse(savedDataString);
            
            const infoContainer = document.getElementById('system-info');
            
            infoContainer.innerHTML = `
                <p><strong>Your OS:</strong> ${parsedData.os}</p>
                <p style="margin-top: 5px;"><strong>Browser:</strong> ${parsedData.browser}</p>
            `;
        }
    }

    handleSystemInfo();

    // Comments
    async function loadComments() {
        const container = document.getElementById('commentsContainer');

        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/10/comments`);
            
            const comments = await response.json();

            container.innerHTML = '';

            comments.forEach(comment => {
                const card = document.createElement('div');
                card.className = 'comment-card';
                
                card.innerHTML = `
                    <h3>${comment.name}</h3>
                    <span class="email">${comment.email}</span>
                    <p>"${comment.body}"</p>
                `;
                
                container.appendChild(card);
            });

        } catch (error) {
            container.innerHTML = `<p style="color: red;">Error loading comments: ${error.message}</p>`;
        }
    }

    loadComments();

    // Form
    function setupModal() {
        const modal = document.getElementById('feedbackModal');
        const closeBtn = document.getElementById('closeModal');

        setTimeout(() => {
            modal.classList.add('active');
        }, 3000); 

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    setupModal();

    // Dark theme
    function setupTheme() {
        const themeBtn = document.getElementById('themeToggle');
        const body = document.body;

        const currentHour = new Date().getHours();
        
        const isDayTime = currentHour >= 7 && currentHour < 21;

        if (!isDayTime) {
            body.classList.add('dark-mode');
        }

        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });
    }

    setupTheme();
});