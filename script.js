document.addEventListener("DOMContentLoaded", () => {
    
  
    function updateTheme() {
      if (body.classList.contains("light-theme")) {
        document.documentElement.style.setProperty("--bg-color", "#ffffff")
        document.documentElement.style.setProperty("--text-color", "#1a1a1a")
        document.documentElement.style.setProperty("--card-bg-color", "#f0f0f0")
        themeIcon.classList.replace("fa-moon", "fa-sun")
      } else {
        document.documentElement.style.setProperty("--bg-color", "#1a1a1a")
        document.documentElement.style.setProperty("--text-color", "#ffffff")
        document.documentElement.style.setProperty("--card-bg-color", "#2a2a2a")
        themeIcon.classList.replace("fa-sun", "fa-moon")
      }
    }
  
    // Tabs functionality
    const tabBtns = document.querySelectorAll(".tab-btn")
    const tabContents = document.querySelectorAll(".tab-content")
  
    // Set initial active tab
    tabBtns[0].classList.add("active")
    tabContents[0].classList.add("active")
  
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach((b) => b.classList.remove("active"))
        tabContents.forEach((c) => c.classList.remove("active"))
  
        // Add active class to clicked button
        btn.classList.add("active")
  
        // Show corresponding content
        const tabId = btn.dataset.tab
        document.getElementById(tabId).classList.add("active")
      })
    })
  })
  
  