<template>
  <nav>
    <div class="nav-header">
      <div class="logo"></div>

      <div class="search-box">
        <div class="icon"></div>
        <input type="text" placeholder="Search companies">
      </div>

      <div class="divider">OR</div>

      <button type="button" class="smarlist-button">New smarlist</button>
        
      

      <ul class="menu">
        <li class="has-dropdown">Prospect</li>
        <li class="has-dropdown">Alert</li>
        <li class="has-dropdown">Learn</li>
      </ul>
    </div>

    <div class="nav-user">
      <div class="user">
        <img src="../assets/chrome.png" alt="Chrome profile photo">
      </div>

      <div class="user has-dropdown">
        <img src="../assets/user.png" alt="User profile photo">
      </div>

    </div>

  </nav>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>