


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>javaplayland/referenceUI.js at e9276ee3b3a52dad4d61e743d3a6750fc0b22563 · milanocookies93/javaplayland</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="milanocookies93/javaplayland" name="twitter:title" /><meta content="javaplayland - Playland" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/7709255?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/7709255?v=3&amp;s=400" property="og:image" /><meta content="milanocookies93/javaplayland" property="og:title" /><meta content="https://github.com/milanocookies93/javaplayland" property="og:url" /><meta content="javaplayland - Playland" property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="827EF62C:0965:29F122C:55062886" name="octolytics-dimension-request_id" /><meta content="9099074" name="octolytics-actor-id" /><meta content="willhempy" name="octolytics-actor-login" /><meta content="f46dc46b5726491686a5f84e5969fe4808fc2460021a95c2d90d2217de375b6d" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="A385OkNbXtFrO+DQ0/ZNt/JVQr8EwSSCBmpLpLHnROHsEnrfSYY1A2WTT5Hvj2ZCauNvF0cGQLQMcIHAZbvRFA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-85e4ac99403eefa73664d9b122f27095fee8b7333e67f34fa34480ae497f7555.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-901780fdaaa6b0f56b2004899a7a24194bf4217cc7864291a9f68fa3a9264fdf.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="8060cc7a9543870628764b4fdb4264ea">

      
  <meta name="description" content="javaplayland - Playland">
  <meta name="go-import" content="github.com/milanocookies93/javaplayland git https://github.com/milanocookies93/javaplayland.git">

  <meta content="7709255" name="octolytics-dimension-user_id" /><meta content="milanocookies93" name="octolytics-dimension-user_login" /><meta content="25270353" name="octolytics-dimension-repository_id" /><meta content="milanocookies93/javaplayland" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="10252238" name="octolytics-dimension-repository_parent_id" /><meta content="angrave/javaplayland" name="octolytics-dimension-repository_parent_nwo" /><meta content="10252238" name="octolytics-dimension-repository_network_root_id" /><meta content="angrave/javaplayland" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/milanocookies93/javaplayland/commits/e9276ee3b3a52dad4d61e743d3a6750fc0b22563.atom" rel="alternate" title="Recent Commits to javaplayland:e9276ee3b3a52dad4d61e743d3a6750fc0b22563" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production linux vis-public fork page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/milanocookies93/javaplayland/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/milanocookies93/javaplayland/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/willhempy" data-ga-click="Header, go to profile, text:username">
      <img alt="Will" class="avatar" data-user="9099074" height="20" src="https://avatars0.githubusercontent.com/u/9099074?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">willhempy</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/milanocookies93/javaplayland/notifications" aria-label="You have unread notifications in this repository" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Wbhv2awJa3dYerfwLA5lbvwZMc9K8z6n6QnqyxRfUBH+8/rAdOgSG01lVJcSD2Wz9FBvQElWkx5rYa6K8q8SNA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BtxK1HzIVCOsasO9yN70wlsd5H6U2k3XCOpeBwM35Yj+cLpxKJvfon8RJt+8MB/zvU+5BE89wRbJ+h2cdfEdZg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="25270353" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/milanocookies93/javaplayland/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/milanocookies93/javaplayland/watchers">
          3
        </a>
        
        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/milanocookies93/javaplayland/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ngobSOlGOR/tusX5UQDUT35o0vXE6PvitERc8ebxwl26ZfTIOVYlZ1jixSUDvB6u4hBBxpS/oO5kffN6a0vMXw==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar milanocookies93/javaplayland"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/milanocookies93/javaplayland/stargazers">
          1
        </a>
</form>
    <form accept-charset="UTF-8" action="/milanocookies93/javaplayland/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="S63dWtt6ZYGb4VysA+uIWyTEz8Ba4HOra6X1j/ldxRyHEpnqsw/YH2ZeBoV1Pzs9SyrjU1xLRGB0uGqpE7THsg==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star milanocookies93/javaplayland"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/milanocookies93/javaplayland/stargazers">
          1
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/milanocookies93/javaplayland/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="7ByGE7zErkD3B06/5bQ9bp2p9lhHH1cMkP97z0lqevNP7OYLtklgbmym2g+4Hok0udt23ZhFR6Ihiu/48EQHig==" /></div>
            <button
                type="submit"
                class="minibutton with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of milanocookies93/javaplayland to your account"
                aria-label="Fork your own copy of milanocookies93/javaplayland to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/milanocookies93/javaplayland/network" class="social-count">14</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author"><a href="/milanocookies93" class="url fn" itemprop="url" rel="author"><span itemprop="title">milanocookies93</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/milanocookies93/javaplayland" class="js-current-repository" data-pjax="#js-repo-pjax-container">javaplayland</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/angrave/javaplayland">angrave/javaplayland</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/milanocookies93/javaplayland/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/milanocookies93/javaplayland" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /milanocookies93/javaplayland">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/milanocookies93/javaplayland/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /milanocookies93/javaplayland/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/milanocookies93/javaplayland/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /milanocookies93/javaplayland/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/milanocookies93/javaplayland/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /milanocookies93/javaplayland/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/milanocookies93/javaplayland/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /milanocookies93/javaplayland/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/milanocookies93/javaplayland.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:milanocookies93/javaplayland.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/milanocookies93/javaplayland" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/milanocookies93/javaplayland/archive/e9276ee3b3a52dad4d61e743d3a6750fc0b22563.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of milanocookies93/javaplayland as a zip file"
                   title="Download the contents of milanocookies93/javaplayland as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/milanocookies93/javaplayland/blob/e9276ee3b3a52dad4d61e743d3a6750fc0b22563/web/scripts/gui/referenceUI.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:adc29911d8e3d2e9d28531e863dd85f4 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref=""
    title=""
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>tree:</i>
    <span class="js-select-button css-truncate-target">e9276ee3b3</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/milanocookies93/javaplayland/blob/add_keyboard_shortcuts/web/scripts/gui/referenceUI.js"
               data-name="add_keyboard_shortcuts"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="add_keyboard_shortcuts">
                add_keyboard_shortcuts
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/milanocookies93/javaplayland/blob/coursera-integration/web/scripts/gui/referenceUI.js"
               data-name="coursera-integration"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="coursera-integration">
                coursera-integration
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/milanocookies93/javaplayland/blob/master/web/scripts/gui/referenceUI.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/milanocookies93/javaplayland/blob/screenreader/web/scripts/gui/referenceUI.js"
               data-name="screenreader"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="screenreader">
                screenreader
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/milanocookies93/javaplayland/blob/seniorUpdates/web/scripts/gui/referenceUI.js"
               data-name="seniorUpdates"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="seniorUpdates">
                seniorUpdates
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/milanocookies93/javaplayland/blob/slow-down-doppio/web/scripts/gui/referenceUI.js"
               data-name="slow-down-doppio"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="slow-down-doppio">
                slow-down-doppio
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/milanocookies93/javaplayland/find/e9276ee3b3a52dad4d61e743d3a6750fc0b22563"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/milanocookies93/javaplayland/tree/e9276ee3b3a52dad4d61e743d3a6750fc0b22563" class="" data-branch="e9276ee3b3a52dad4d61e743d3a6750fc0b22563" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">javaplayland</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/milanocookies93/javaplayland/tree/e9276ee3b3a52dad4d61e743d3a6750fc0b22563/web" class="" data-branch="e9276ee3b3a52dad4d61e743d3a6750fc0b22563" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">web</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/milanocookies93/javaplayland/tree/e9276ee3b3a52dad4d61e743d3a6750fc0b22563/web/scripts" class="" data-branch="e9276ee3b3a52dad4d61e743d3a6750fc0b22563" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">scripts</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/milanocookies93/javaplayland/tree/e9276ee3b3a52dad4d61e743d3a6750fc0b22563/web/scripts/gui" class="" data-branch="e9276ee3b3a52dad4d61e743d3a6750fc0b22563" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">gui</span></a></span><span class="separator">/</span><strong class="final-path">referenceUI.js</strong>
  </div>
</div>

<include-fragment class="commit commit-loader file-history-tease" src="/milanocookies93/javaplayland/contributors/e9276ee3b3a52dad4d61e743d3a6750fc0b22563/web/scripts/gui/referenceUI.js">
  <div class="file-history-tease-header">
    Fetching contributors&hellip;
  </div>

  <div class="participation">
    <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-EAF2F5-0bdc57d34b85c4a4de9d0d1db10cd70e8a95f33ff4f46c5a8c48b4bf4e5a9abe.gif" width="16" /></p>
    <p class="loader-error">Cannot retrieve contributors at this time</p>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
    <div class="file-actions">
      <div class="button-group">
        <a href="/milanocookies93/javaplayland/raw/e9276ee3b3a52dad4d61e743d3a6750fc0b22563/web/scripts/gui/referenceUI.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/milanocookies93/javaplayland/blame/e9276ee3b3a52dad4d61e743d3a6750fc0b22563/web/scripts/gui/referenceUI.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/milanocookies93/javaplayland/commits/e9276ee3b3a52dad4d61e743d3a6750fc0b22563/web/scripts/gui/referenceUI.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->


          <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be on a branch to make or propose changes to this file"><span class="octicon octicon-pencil"></span></a>

        <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
           aria-label="You must be on a branch to make or propose changes to this file">
      </a>
    </div><!-- /.actions -->
    <div class="file-info">
        445 lines (414 sloc)
        <span class="file-info-divider"></span>
      29.37 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">// Generated by CoffeeScript 1.8.0</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">  <span class="pl-s">var</span> editorCount, referencePage, root, sandBoxInfo, setUpExample, setUpJavaSandbox;</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">  root <span class="pl-k">=</span> <span class="pl-k">typeof</span> <span class="pl-sv">exports</span> <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-sv">exports</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> exports <span class="pl-k">:</span> referencePage <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">  editorCount <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">  <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c">   * Fades out the background to show a reference</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c">   * page for the user when they click the menu buttons.</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c">   */</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">  sandBoxInfo <span class="pl-k">=</span> (<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">    <span class="pl-s">var</span> backFade, cssData, input, output, pageSize, refContainer;</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">    backFade <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">    refContainer <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">    input <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    output <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">    pageSize <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">    cssData <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line"><span class="pl-c">	 * Loads the CSS for the reference UI</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line"><span class="pl-c">	 * from a json file.</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line"><span class="pl-c">	 * @param pSize Represents the size of the window.</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">sandBoxInfo</span>(<span class="pl-vpf">pSize</span>) {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">      <span class="pl-s">var</span> dData;</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">      pageSize <span class="pl-k">=</span> pSize;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">      dData <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">      <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Starting<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">      cssData <span class="pl-k">=</span> findConfig(<span class="pl-s1"><span class="pl-pds">&#39;</span>scripts/config/referenceUI.json<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line"><span class="pl-c">	 * This sets up the IO area.</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line"><span class="pl-c">	 * @param pageSize Represents the size of the window.</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">    <span class="pl-s3">sandBoxInfo</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">setupInput</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">      <span class="pl-s">var</span> hSize, vSize;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">      vSize <span class="pl-k">=</span> pageSize <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">      hSize <span class="pl-k">=</span> pageSize / <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">      input <span class="pl-k">=</span> makeDiv(<span class="pl-c1">null</span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">      output <span class="pl-k">=</span> makeDiv(<span class="pl-c1">null</span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">      $(input).css({</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">        width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> hSize,</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">        height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> vSize,</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">        position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">        left<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>3.3%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">        top<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>5%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>border<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>1px solid black<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">      <span class="pl-k">return</span> $(output).css({</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">        width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> hSize,</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">        height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> vSize,</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&quot;</span>padding-left<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>1%<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">        position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">        right<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>3.3%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">        top<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>5%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>border<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>1px solid black<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&quot;</span>overflow<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">   <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line"><span class="pl-c">    * This sets up the reference container.</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line"><span class="pl-c">    * @param pageSize Represents the size of the reference container</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line"><span class="pl-c">	*/</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">    <span class="pl-s3">sandBoxInfo</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">setupRefContainer</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">      <span class="pl-s">var</span> pSize;</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">      pSize <span class="pl-k">=</span> pageSize <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">      refContainer <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">      $(<span class="pl-s1"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>).prepend(refContainer);</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">      $(refContainer).css({</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">        width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> pSize,</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">        height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> pSize,</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">        left<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>5%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">        top<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>5%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">        position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>z-index<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>301<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>background-color<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#FFFFFF<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">    <span class="pl-s3">sandBoxInfo</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">addIO</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">      $(refContainer).prepend(input);</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">      <span class="pl-k">return</span> $(refContainer).prepend(output);</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line"><span class="pl-c">	 * Fades out the screen behind the reference </span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line"><span class="pl-c">	 * page using CSS data loaded from JSON earlier.</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">    <span class="pl-s3">sandBoxInfo</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">setupBackFade</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">      backFade <span class="pl-k">=</span> makeDiv({</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">        id<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>bF<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">      }, cssData[<span class="pl-s1"><span class="pl-pds">&quot;</span>backFadeCSS<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">      <span class="pl-k">return</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>).prepend(backFade);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line"><span class="pl-c">	 * Adds icons to the corner of the reference page.</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line"><span class="pl-c">	 * (results from clicking the keyboard icon)</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">    <span class="pl-s3">sandBoxInfo</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">setupEnlarge</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">      <span class="pl-s">var</span> en1, en2;</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">      en1 <span class="pl-k">=</span> makeImgElem({</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>img/interface/enlarge1.png<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>en<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">      }, cssData[<span class="pl-s1"><span class="pl-pds">&quot;</span>en1CSS<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">      en2 <span class="pl-k">=</span> makeImgElem({</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>img/interface/enlarge1.png<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>en<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">      }, cssData[<span class="pl-s1"><span class="pl-pds">&quot;</span>en2CSS<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">      $(en2).css(cssData[<span class="pl-s1"><span class="pl-pds">&quot;</span>en2CSS<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">      $(input).append(en1);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">      <span class="pl-k">return</span> $(output).append(en2);</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">    <span class="pl-s3">sandBoxInfo</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">getInput</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">      <span class="pl-k">return</span> input;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">    <span class="pl-s3">sandBoxInfo</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">getOutput</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">      <span class="pl-k">return</span> output;</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">    <span class="pl-s3">sandBoxInfo</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">getBackFade</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">      <span class="pl-k">return</span> backFade;</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">    <span class="pl-s3">sandBoxInfo</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">getRefContainer</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">      <span class="pl-k">return</span> refContainer;</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">    <span class="pl-k">return</span> sandBoxInfo;</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">  })();</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">  <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line"><span class="pl-c">   * This method adds a Java sandbox to the current page and </span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line"><span class="pl-c">   * returns information about it.</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line"><span class="pl-c">   * @param pageSize Represents the size of the input and </span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line"><span class="pl-c">   * 				 output areas on the display panel</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line"><span class="pl-c">   */</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">  <span class="pl-s3">window</span>.<span class="pl-en">sandBoxPage</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">    <span class="pl-s">var</span> clClick, clHover, cllvHover, closeClick, enClick, enInHover, enOutHover, pageSize, sPanel, samplecode;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">    pageSize <span class="pl-k">=</span> <span class="pl-c1">90</span>;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">    sPanel <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">sandBoxInfo</span>(pageSize);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">    sPanel.setupInput();</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">    sPanel.setupBackFade(<span class="pl-c1">300</span>);</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">    sPanel.setupRefContainer();</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">    sPanel.addIO();</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">    sPanel.setupEnlarge();</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">    <span class="pl-en">enOutHover</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">src</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>img/interface/enlarge2.png<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">    <span class="pl-en">enInHover</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">src</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>img/interface/enlarge1.png<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">    <span class="pl-en">enClick</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">      <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Making larger<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">      $(<span class="pl-v">this</span>).unbind();</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">      $(<span class="pl-v">this</span>).<span class="pl-sc">parent</span>().<span class="pl-s3">stop</span>();</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">      $(<span class="pl-v">this</span>).<span class="pl-sc">parent</span>().siblings().<span class="pl-s3">stop</span>();</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">      <span class="pl-v">this</span>.<span class="pl-sc">src</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>img/interface/shrink1.png<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">      $(<span class="pl-v">this</span>).<span class="pl-sc">parent</span>().animate({</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">        width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>90%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">        height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>90%<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">      $(<span class="pl-v">this</span>).<span class="pl-sc">parent</span>().siblings().animate({</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">        width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>0%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">        height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>0%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">        opacity<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">      $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.en<span class="pl-pds">&quot;</span></span>).hover(clHover, cllvHover);</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">      <span class="pl-k">return</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.en<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>(clClick);</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">    <span class="pl-en">closeClick</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">      <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Making smaller<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">      $(sPanel.getBackFade()).<span class="pl-s3">remove</span>();</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">      $(sPanel.getRefContainer()).<span class="pl-s3">remove</span>();</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">      <span class="pl-k">return</span> codeland.doppioAPI.<span class="pl-s3">abort</span>();</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">    <span class="pl-en">clClick</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">      $(<span class="pl-v">this</span>).unbind();</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">      $(sPanel.getInput()).<span class="pl-s3">stop</span>();</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">      $(sPanel.getOutput()).<span class="pl-s3">stop</span>();</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">      $(sPanel.getInput()).animate({</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">        width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>45%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">        height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>90%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">        opacity<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">      $(sPanel.getOutput()).animate({</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">        width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>45%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">        height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>90%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">        opacity<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">      $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.en<span class="pl-pds">&quot;</span></span>).hover(enOutHover, enInHover);</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">      <span class="pl-k">return</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.en<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>(enClick);</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">    <span class="pl-en">clHover</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">src</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>img/interface/shrink2.png<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">    <span class="pl-en">cllvHover</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">src</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>img/interface/shrink1.png<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">    $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.en<span class="pl-pds">&quot;</span></span>).hover(enOutHover, enInHover);</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">    $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.en<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>(enClick);</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">    $(<span class="pl-s1"><span class="pl-pds">&quot;</span>#bF<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>(closeClick);</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">    samplecode <span class="pl-k">=</span> [<span class="pl-s1"><span class="pl-pds">&quot;</span>////Write your Java statements here<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>int answer = 6*7;<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>print(answer);<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>String text=<span class="pl-cce">\&quot;</span>Hello World<span class="pl-cce">\&quot;</span>;<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>text = text.toUpperCase();<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>for(int i=10;i&gt;0;i--) {<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\t</span>print(i);<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>String ello = text.substring(1, text.length()); // Drop first character<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>print(text);<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>print(ello);<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>int[] array = new int[] {2,3,5,7,11,13};<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>print(array);<span class="pl-pds">&quot;</span></span>].<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">    setUpJavaSandbox(sPanel.getInput(), sPanel.getOutput(), samplecode);</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">    <span class="pl-k">return</span> sPanel;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line"> <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line"><span class="pl-c">  * This method adds a panel containing an introduction to Java to the page.</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line"><span class="pl-c">  * @param size Represents the size of the display panel.</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line"><span class="pl-c">  * InnerHTML is set in this method because setting it in </span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line"><span class="pl-c">  * another file did not work, there were problems with runnable code</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line"><span class="pl-c">  */</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">  <span class="pl-s3">window</span>.<span class="pl-en">referencePage</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">    <span class="pl-s">var</span> backFade, closeClick, examples, ref, refContainer, sel, _i, _ref, _results;</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">    backFade <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">    refContainer <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">    $(backFade).css({</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">      width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">      height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">      position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>z-index<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>300<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>background-color<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#000000<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>opacity<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.5<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">    $(refContainer).css({</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">      width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>90%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">      height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>90%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">      left<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>5%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">      top<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>5%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">      position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>z-index<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>301<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>background-color<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#FFFFFF<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">    $(<span class="pl-s1"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>).prepend(backFade);</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">    $(backFade).attr({</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">      id<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>bF<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">    $(<span class="pl-s1"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>).prepend(refContainer);</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">    ref <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">    $(ref).css({</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">      width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>90%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">      height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>90%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">      position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">      right<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>5%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">      top<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>5%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>border<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>1px solid black<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>overflow<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">    ref.innerHTML = &#39;&lt;h1&gt;A short introduction to Java (Draft Version!)&lt;/h1&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;By undergraduate CS students at the University of Illinois at Urbana Champaign (UIUC).&lt;/p&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;When first looking at &lt;tt&gt;code&lt;/tt&gt;, it can be very confusing and disorienting because it is so different from conventional human language.  Once you understand your first language, picking up another will be considerably easier, and something you may have to do quickly and often if you program professionally.  In these regards, &lt;tt&gt;Java&lt;/tt&gt; is no different.&lt;/p&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;To help you get acquainted with reading and writing scripts, there will be code snippets and examples in boxes littered throughout this text that you can compile and run by clicking the little button beneath them.  To start out, these boxes will not contain real code, but something called &lt;tt&gt;pseudocode&lt;/tt&gt;.  &lt;tt&gt;Pseudocode&lt;/tt&gt; is halfway between a real programming language and a normal human language, it allows us to plan out and understand computer logic in an easier to read format.  Read further and the &lt;tt&gt;pseudocode&lt;/tt&gt; examples will be replaced more and more by actual code as you learn about &lt;tt&gt;Java.&lt;/tt&gt;&lt;/p&gt; &lt;h2&gt;Basic Formatting&lt;/h2&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;Syntax, or the laws and rules that govern whether or not code will work on a computer are very strict.  You must follow syntax rules exactly, or the code will not work.  Some basic things to become aware of are &lt;tt&gt;white space&lt;/tt&gt;(spaces, tabs, and newlines) &lt;tt&gt;semicolons&lt;/tt&gt;(;), &lt;tt&gt;brackets&lt;/tt&gt;(&lt;tt&gt;(),{},[]&lt;/tt&gt;), and &lt;tt&gt;comments&lt;/tt&gt;(//,/*).  Understanding how these things are used and what they do is fundamental in both writing and reading code.&lt;/p&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;Comments&lt;/tt&gt; are denoted on a single line by // or contained within /* Text Here! */.  &lt;tt&gt;Comments&lt;/tt&gt; are used to leave notes to yourself about the code or to explain the functionality and thought process you intended for the code so that others can read and understand your program.&lt;/p&gt; &lt;div class=&quot;pseudo&quot;&gt;//If you make a script with nothing but comments, the computer won\&#39;t find anything to do!&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;Spacing&lt;/tt&gt; is what helps make code more readable, and though not always a convention that is necessary for code to run, code is already hard enough to read as it is.  Each line is typically used for a single command - when you start writing a new command you go to a new line, this also allows error reporting programs, or &quot;&lt;tt&gt;debuggers&lt;/tt&gt;&quot;, to help you pinpoint your problem because they can tell you exactly what line the error is occurring on.&lt;/p&gt; &lt;div class=&quot;pseudo&quot;&gt;Get bread\nGet peanutButter\nSpread peanutButter\nAssemble sandwich\nDevour sandwich&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;Tabs&lt;/tt&gt; are used to create what is called &lt;tt&gt;indentation&lt;/tt&gt;, which is very important when reading code.  Programming instructions are arranged in a hierarchy - that is, some instructions of code may have certain pieces of memory (variables), or other instructions that they have control of.  This is a form of &lt;tt&gt;Parent&lt;/tt&gt; and &lt;tt&gt;Child&lt;/tt&gt; relationship, a concept that will come up many times in programming in different ways.  In this context, the &lt;tt&gt;child&lt;/tt&gt; code will be directly underneath its &lt;tt&gt;parent&lt;/tt&gt; code and &lt;tt&gt;indented&lt;/tt&gt; with one more tab then the &lt;tt&gt;parent&lt;/tt&gt; code is.&lt;/p&gt; &lt;div class=&quot;pseudo&quot;&gt;MakePeanutButterSandwich\n\tGet bread\n\tGet peanutButter\n\tSpread peanutButter\n\tAssemble sandwich\n\tDevour sandwich&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;Semicolons&lt;/tt&gt; are a very common feature in many languages, and like newlines denote the end of a command, or rather, separate one command from another.  Unlike newlines, however, &lt;tt&gt;semicolons&lt;/tt&gt; are not optional.  With the exception of &lt;tt&gt;if&lt;/tt&gt;, &lt;tt&gt;for&lt;/tt&gt;, and &lt;tt&gt;while&lt;/tt&gt; statements - which don\&#39;t need &lt;tt&gt;semicolons&lt;/tt&gt; and are covered later - if you are missing a single &lt;tt&gt;semicolon&lt;/tt&gt; somewhere in your code the whole thing won\&#39;t work.  Chances are the only way to find the error will be to read through the whole thing looking for that one insignificant missing character, so its best to make &lt;tt&gt;semicolons&lt;/tt&gt; an ingrained habit.&lt;/p&gt; &lt;div class=&quot;pseudo&quot;&gt;MakePeanutButterSandwich\n\tGet bread;\n\tGet peanutButter;\n\tSpread peanutButter;\n\tAssemble sandwich;\n\tDevour sandwich;&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;Brackets perform a role similar to &lt;tt&gt;indentation&lt;/tt&gt;.  They are used to create a hierarchy of &lt;tt&gt;parent&lt;/tt&gt; and &lt;tt&gt;child&lt;/tt&gt; relationships by grouping children inside of them that are of the same level in the hierarchy, also called &lt;tt&gt;siblings&lt;/tt&gt;, and tying them to a &lt;tt&gt;parent&lt;/tt&gt;.  Like &lt;tt&gt;semicolons&lt;/tt&gt; they are also mandatory, if not implemented in the correct manner and place, your code will break.&lt;/p&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;Parenthetical brackets&lt;/tt&gt; - () - are used for function parameter grouping, which we\&#39;ll talk about more in depth later, and for order of operations when you perform math on things.  &lt;tt&gt;Squiggly brackets&lt;/tt&gt; - {} - are used in conjunction with tabs and newlines to group lines of code under their parent code lines.  &lt;tt&gt;Square brackets&lt;/tt&gt; - [] - are used specifically for a special kind of memory grouping called an &lt;tt&gt;Array&lt;/tt&gt;, which will be covered in detail later.&lt;/p&gt; &lt;div class=&quot;pseudo&quot;&gt;MakeSandwich(peanutButter) {\n\tGet(bread);\n\tGet(peanutButter);\n\tSpread(peanutButter);\n\tAssemble(sandwich);\n\tDevour(sandwich);\n}&lt;/div&gt; &lt;h2&gt;Stored Information - Variables&lt;/h2&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;Computers only do exactly what they are told, and know only exactly what they are given at any point in time.  &lt;tt&gt;Variables&lt;/tt&gt; are a vital tool that allow us to handle data and information: manipulating it, moving it around, and ensuring that the data is in the correct form and place at the correct time.  A &lt;tt&gt;variable&lt;/tt&gt; is a virtual object that stores data, whether that data be a number, a string of characters, or a &lt;tt&gt;reference&lt;/tt&gt; (in a sense, a pointer) to another &lt;tt&gt;variable&lt;/tt&gt;.&lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;int num = 4;\nprint(num);&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;Variables&lt;/tt&gt; in Java are typed, that is, when created the &lt;tt&gt;variable&lt;/tt&gt; will only be able to contain a specific kind of information.  A &lt;tt&gt;variable&lt;/tt&gt; initialized to hold numbers will not hold words for instance.  To this end, there are many different types of &lt;tt&gt;variables&lt;/tt&gt;, ones that can hold numbers of varying sizes and decimal place accuracies such as &lt;tt&gt;int&lt;/tt&gt;, &lt;tt&gt;double&lt;/tt&gt;, and &lt;tt&gt;long&lt;/tt&gt;.  There are types that will hold single characters, such as &lt;tt&gt;char&lt;/tt&gt;, and a special type of variable called a &lt;tt&gt;string&lt;/tt&gt; that points to words and sentences by building on top of the basic &lt;tt&gt;variable&lt;/tt&gt; functionalities.  &lt;tt&gt;Boolean&lt;/tt&gt; variable types hold either true or false and nothing else - simplistic, yet very useful and efficient.&lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;String out = &quot;Hello World&quot;;\nprint(out);&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;There are many different types of variables that can be initialized. In fact, you can even create your own variable and class types. Variables can also be reassigned to hold different information. Modifying the values of variables is also important and useful.&lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;int num = 4;\nnum = 3;\nprint(num);num = num+3;\nprint(num);String out = &quot;Hello World&quot;;\nprint(out);out = out + &quot; again&quot;;\nprint(out);&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;Reference variables&lt;/tt&gt;, more commonly called &lt;tt&gt;pointers&lt;/tt&gt;, are &lt;tt&gt;variables&lt;/tt&gt; that hold the location of constructs of information such as other &lt;tt&gt;variables&lt;/tt&gt;, groups of &lt;tt&gt;variables&lt;/tt&gt;, and many other things.  While chaining their use can become confusing, developing the skills and understanding of how they function will be very helpful.  &lt;tt&gt;Pointers&lt;/tt&gt; are an integral part of programming.&lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;int[] numArray;\nnumArray = new int[3];\nnumArray[0] = 1;\nnumArray[1] = 2;\nnumArray[2] = 3;\nprint(numArray[1]);&lt;/div&gt; &lt;h2&gt;Expressions&lt;/h2&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;A considerable amount of your time programming will be spent devising ways to extrapolate the important information held in the data, this is often done by writing what is called an &lt;tt&gt;expression&lt;/tt&gt;.  An &lt;tt&gt;expression&lt;/tt&gt; takes several inputs - a combination of &lt;tt&gt;variables&lt;/tt&gt; and &lt;tt&gt;constants&lt;/tt&gt; - and produces a single output.  Math, &lt;tt&gt;string&lt;/tt&gt; manipulation, and &lt;tt&gt;boolean&lt;/tt&gt; logic are all forms of &lt;tt&gt;expressions&lt;/tt&gt;.  For those unfamiliar with the term, &lt;tt&gt;boolean&lt;/tt&gt; logic is a sort of math performed on true and false, instead of numbers.&lt;/p&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;Operators&lt;/tt&gt; are functions that usually take two inputs and produce one output, and are used to evaluate &lt;tt&gt;expressions&lt;/tt&gt;, to find out what they simplify to.  The +,-,*,/,%,^ signs are all mathematical &lt;tt&gt;operators&lt;/tt&gt;, more formally called the &lt;tt&gt;Arithmetic Operators&lt;/tt&gt;.  For those unfamiliar with the % operator, it is called &lt;tt&gt;modulus&lt;/tt&gt;, or \&#39;remainder after division\&#39;.  &lt;tt&gt;Modulus&lt;/tt&gt; makes numbers act as if on a clock, they wrap around after a certain magnitude.  For example, if you wait 13 hours from noon, it will be 1 o\&#39;clock.&lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;print((13*1)%(6+6));&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;Relational operators&lt;/tt&gt; make a statement about equality between two operands, and then evaluate to either true or false.  These are the ==(equals), !=(not equals), &amp;gt;(greater than), &amp;lt;(less than), &amp;lt;=(less than or equals), and &amp;gt;=(greater than or equals) operators.  Take careful note that the == &lt;tt&gt;operator&lt;/tt&gt; and =, the &lt;tt&gt;assignment operator&lt;/tt&gt;, are completely different.  The = &lt;tt&gt;operator&lt;/tt&gt; will assign one value to another, usually variables, while the == &lt;tt&gt;operator&lt;/tt&gt; checks to see if the two operands are equivalent.&lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;print((1+1)==5);&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;Logical operators&lt;/tt&gt; perform what is called &lt;tt&gt;boolean logic&lt;/tt&gt;, and concern whether a statement is true or false.  These operators include the &amp;&amp;(and),||(or), and !(not, one of the few operators to take only a single input expression). These operators have booleans as both their inputs and their output. These are primarily used to direct &lt;tt&gt;conditional logic&lt;/tt&gt;, the focus of the next subject.&lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;print(true &amp;&amp; false);&lt;/div&gt; &lt;h2&gt;Controlling Logic Flow - Conditionals&lt;/h2&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;Crucial to useful programs is our ability to give computers the ability to make choices based on the information that they are given.  This is done through &lt;tt&gt;conditionals&lt;/tt&gt;, also called control statements, such as &lt;tt&gt;if&lt;/tt&gt;, &lt;tt&gt;while&lt;/tt&gt;, and &lt;tt&gt;for&lt;/tt&gt;.&lt;/p&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;If&lt;/tt&gt; statements are the most elementary of &lt;tt&gt;conditionals&lt;/tt&gt;.  The &lt;tt&gt;if&lt;/tt&gt; statement is given control of some of its own instructions, indicated by some conventions discussed earlier (tabs, {} braces).  The &lt;tt&gt;if&lt;/tt&gt; statement will check its condition, which ultimately evaluates to true or false.  If the statement is true, the &lt;tt&gt;if&lt;/tt&gt; statements own set of instructions will be executed, otherwise they will be passed over.&lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;if( 1+1 == 2 ) {\n\tprint(&quot;Yes! one plus one is two&quot;);\n}\nif( 1 + 1 == 3) {\n\tprint(&quot;I will not be printed :-(&quot;);\n}&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;If&lt;/tt&gt; statements can be further extended in influence and ability using the &lt;tt&gt;else&lt;/tt&gt; statement.  Appended to an &lt;tt&gt;if&lt;/tt&gt; statement, the &lt;tt&gt;else&lt;/tt&gt; statement denotes instructions to be run if its partner &lt;tt&gt;if&lt;/tt&gt; statement resolves to false. The &lt;tt&gt;else&lt;/tt&gt; statement can even branch to more &lt;tt&gt;if&lt;/tt&gt; and &lt;tt&gt;else&lt;/tt&gt; statements to create a nested tree of logic to accommodate the programs purpose. Multiple branches can also be created at the same level with &lt;tt&gt;else if&lt;/tt&gt;. &lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;if (3==8) {\n\tprint(&quot;this won\&#39;t print&quot;);\n} else {\n\tprint(&quot;but this will&quot;);\n}&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;For loops&lt;/tt&gt; perform their commands a certain number of times.  They are traditionally given a variable which they increment each loop until the given condition is met, and the loop terminates.&lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;for(int i=1; i&lt;4; i++) {\n\tprint(&quot;This is loop #:&quot; + i);\n}&lt;/div&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;tt&gt;While loops&lt;/tt&gt; come in two forms, &lt;tt&gt;do while&lt;/tt&gt; and &lt;tt&gt;while&lt;/tt&gt;.  &lt;tt&gt;Do while&lt;/tt&gt; will loop once no matter what, since it checks its condition after running.  &lt;tt&gt;While&lt;/tt&gt; will check its condition before running, and may therefore not run at all depending on the rest of the code. &lt;div class=&quot;ex&quot;&gt;int num = 0;\nwhile(num &lt; 3) {\n\tprint(num);\n\tnum = num + 1;\n}&lt;/div&gt;&lt;h2&gt;Functions&lt;/h2&gt; &lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; To group together lines of code so that the can be executed together, we can put them inside a &lt;tt&gt;function&lt;/tt&gt;. &lt;tt&gt;Functions&lt;/tt&gt; also have the added benefit of being able to repeatedly execute the block of code repeatedly with a single line.&lt;/p&gt; &lt;div class=&quot;ex&quot;&gt;void sayHi() {\n\tprint(&quot;Hi!&quot;);\n\tprint(&quot;How are you?&quot;);\n}\n\nsayHi();\nsayHi();&lt;/div&gt;&lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; Function become very powerful when we allow the use of &lt;tt&gt;parameters&lt;/tt&gt;. &lt;tt&gt;Parameters&lt;/tt&gt; allow passing in additional data to the functions as inputs, which can either change how a function executes or be used as data.&lt;/p&gt;&lt;div class=&quot;ex&quot;&gt;void callOut(int number) {\n\tprint(number);\n\tif(number &gt; 4)\n\t\tprint(&quot;And that\&#39;s it folks.&quot;);\n}\n\callOut(1);\ncallOut(4);\ncallOut(11);&lt;/div&gt;&lt;p class=&quot;rp&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; One of the trickiest coding structures to master is &lt;tt&gt;recursion&lt;/tt&gt;. &lt;tt&gt;Recursion&lt;/tt&gt; refers to the process of dividing a process into smaller problems of the same type. In practice, this is achieved in code by having a function call itself.&lt;/p&gt;&lt;div class=&quot;ex&quot;&gt;int factorial(int number){\n\tif(number == 0)\n\t\treturn 1;\n\treturn number*factorial(number-1);\n}\n\nprint(&quot;5! is equal to&quot;);\nprint(factorial(5));&lt;/div&gt;&#39;;</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">    examples <span class="pl-k">=</span> $(ref).children(<span class="pl-s1"><span class="pl-pds">&quot;</span>.ex<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">    $(refContainer).prepend(ref);</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">    <span class="pl-en">closeClick</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">      $(backFade).<span class="pl-s3">remove</span>();</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">      $(refContainer).<span class="pl-s3">remove</span>();</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">      <span class="pl-k">return</span> codeland.doppioAPI.<span class="pl-s3">abort</span>();</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">    $(<span class="pl-s1"><span class="pl-pds">&quot;</span>#bF<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>(closeClick);</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">    _results <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">    <span class="pl-k">for</span> (sel <span class="pl-k">=</span> _i <span class="pl-k">=</span> <span class="pl-c1">0</span>, _ref <span class="pl-k">=</span> examples.<span class="pl-sc">size</span>(); <span class="pl-c1">0</span> <span class="pl-k">&lt;=</span> _ref <span class="pl-k">?</span> _i <span class="pl-k">&lt;</span> _ref <span class="pl-k">:</span> _i <span class="pl-k">&gt;</span> _ref; sel <span class="pl-k">=</span> <span class="pl-c1">0</span> <span class="pl-k">&lt;=</span> _ref <span class="pl-k">?</span> <span class="pl-k">++</span>_i <span class="pl-k">:</span> <span class="pl-k">--</span>_i) {</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">      _results.<span class="pl-s3">push</span>(setUpExample(examples.eq(sel)));</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">    <span class="pl-k">return</span> _results;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">  <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line"><span class="pl-c">   * Sets up the up the example text in the</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line"><span class="pl-c">   * reference code editor.</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line"><span class="pl-c">   */</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">  <span class="pl-en">setUpExample</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">dive</span>) {</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">    <span class="pl-s">var</span> i, o, text;</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">    text <span class="pl-k">=</span> $(dive).<span class="pl-sc">text</span>();</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">    $(dive).empty();</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">    i <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">    o <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">    $(i).attr({</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ei<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">    $(o).attr({</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>eo<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">    $(dive).append(i);</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">    $(dive).append(o);</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">    <span class="pl-k">return</span> setUpJavaSandbox(i, o, text);</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">  <span class="pl-en">setUpJavaSandbox</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">input</span>, <span class="pl-vpf">output</span>, <span class="pl-vpf">texti</span>) {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">    <span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line"><span class="pl-c">        Sets up the code editor and the doppio api for running Java code.</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">    <span class="pl-s">var</span> abort, log, msg, run, sandBoxEditor, stdout, textOutput;</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">    input <span class="pl-k">=</span> $(input);</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">    output <span class="pl-k">=</span> $(output);</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">    textOutput <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div &gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">    output.append(textOutput.get(<span class="pl-c1">0</span>));</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">    textOutput.css({</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>white-space<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>pre-line<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>font-family<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>monospace<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>overflow<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">    input.append(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div id=&quot;javasandboxsource<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> editorCount <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">    sandBoxEditor <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">PlayerCodeEditor</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>javasandboxsource<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> editorCount, <span class="pl-c1">null</span>, texti, <span class="pl-c1">false</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-c1">null</span>, <span class="pl-c1">true</span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">    editorCount<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">    msg <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">    <span class="pl-en">stdout</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">str</span>) {</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">      msg <span class="pl-k">+=</span> str;</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">      textOutput.<span class="pl-sc">text</span>(msg);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">    <span class="pl-en">log</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">mesg</span>) {</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-en">console</span><span class="pl-s3">.log</span>(mesg);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">    run <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;img&gt;<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">      id<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>runCode<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> editorCount,</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">      src<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>img/freeware/button_play_green-48px.png<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">      css<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>max-height<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>19%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>min-height<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>24px<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">      alt<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Run Button<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">      title<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Run the program<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">      <span class="pl-en">click</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">        <span class="pl-s">var</span> finished_cb, srcText;</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">        textOutput.<span class="pl-sc">text</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>Running...<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">        $(<span class="pl-v">this</span>).hide();</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">        $(<span class="pl-v">this</span>).siblings(<span class="pl-s1"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>).show();</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">        msg <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">        finished_cb <span class="pl-k">=</span> (<span class="pl-st">function</span>(<span class="pl-vpf">_this</span>) {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">          <span class="pl-k">return</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">            stdout(<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">            $(_this).show();</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">            <span class="pl-k">return</span> $(_this).siblings(<span class="pl-s1"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>).hide();</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">        })(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">        codeland.doppioAPI.<span class="pl-s3">abort</span>();</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">        codeland.doppioAPI.setOutputFunctions(stdout, log);</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">        srcText <span class="pl-k">=</span> sandBoxEditor.getStudentCode();</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">        <span class="pl-k">if</span> (srcText.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">          stdout(<span class="pl-s1"><span class="pl-pds">&#39;</span>Classes are not yet supported by our Web-based Java<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">          finished_cb();</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">          codeland.doppioAPI.run(srcText, <span class="pl-c1">null</span>, finished_cb);</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">        e.preventDefault();</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">    abort <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;img&gt;<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">      id<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>abortCode<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> editorCount,</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">      src<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>img/freeware/button_stop_red-48px.png<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">      css<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>max-height<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>19%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>min-height<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>24px<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">      alt<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Abort Button<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">      title<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Stop the currently running program<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">      <span class="pl-en">click</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">        <span class="pl-s">var</span> aborted;</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">        aborted <span class="pl-k">=</span> (<span class="pl-st">function</span>(<span class="pl-vpf">_this</span>) {</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">          <span class="pl-k">return</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">            stdout(<span class="pl-s1"><span class="pl-pds">&quot;</span>Stopped<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">            $(_this).siblings(<span class="pl-s1"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>).show();</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">            <span class="pl-k">return</span> $(_this).hide();</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">        })(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">        codeland.doppioAPI.<span class="pl-s3">abort</span>(aborted);</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">        e.preventDefault();</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">    abort.hide();</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">    input.append(run.get(<span class="pl-c1">0</span>));</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">    input.append(abort.get(<span class="pl-c1">0</span>));</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">  <span class="pl-s3">window</span>.<span class="pl-en">AboutPage</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">    <span class="pl-s">var</span> backFade, closeClick, header, para, refContainer;</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">    <span class="pl-en">closeClick</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">      $(backFade).<span class="pl-s3">remove</span>();</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">      <span class="pl-k">return</span> $(refContainer).<span class="pl-s3">remove</span>();</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">    backFade <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">    refContainer <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">    $(backFade).css({</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">      width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">      height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">      position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>z-index<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>300<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>background-color<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#000000<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>opacity<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.5<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">    $(refContainer).css({</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">      width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>60%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">      height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>60%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">      left<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>30%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">      top<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>30%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">      position<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>z-index<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>301<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>background-color<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#FFFFFF<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">    $(<span class="pl-s1"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>).prepend(backFade);</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">    $(backFade).attr({</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">      id<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>bF<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">    $(<span class="pl-s1"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>).prepend(refContainer);</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">    header <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">    para <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">    $(header).css({</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>position<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>static<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>overflow<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>26px<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>25%<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>text-align<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>center<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">    $(para).css({</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>overflow<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>max-height<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>75%<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>position<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>static<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">    header.innerHTML <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Legal Terms and Attributions<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">    para.innerHTML = &quot;Copyright (C) 2013 The Board of Trustees at the University of Illinois &lt;br/&gt; Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \&quot;Software\&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: &lt;br/&gt; The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. &lt;br/&gt; THE SOFTWARE IS PROVIDED \&quot;AS IS\&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. &lt;hr&gt; &lt;em&gt;Third-party open-source content&lt;/em&gt;&lt;br/&gt; Sounds from freesound and images from openclipart.org are licensed under &lt;a href=&#39;http://creativecommons.org/publicdomain/zero/1.0/&#39;&#39;&gt;the creative commons 0 license&lt;/a&gt; (&#39;game over&#39;,&#39;level completed&#39; sounds; &#39;book&#39;, &#39;star&#39; and treasure map icons)&lt;br /&gt; The Doppio jvm license is available &lt;a href=&#39;https://github.com/int3/doppio/blob/master/LICENSE&#39;&gt;here&lt;/a&gt;.&lt;br/&gt; Last Guardian Sprites by Philipp Lenssen are licensed under the Creative Commons &lt;a href=&#39;http://creativecommons.org/licenses/by/3.0/&#39;&gt; attribution license&lt;/a&gt;.&lt;br/&gt; The yellow arrow icon by Jack Cai and the grey keyboard icon by The Working Group downloaded from findicons.com is licensed under &lt;a href=&#39;http://creativecommons.org/licenses/by-nd/2.5/&#39;&gt;Creative Commons Attributions no Derivatives&lt;/a&gt; &lt;hr&gt; &lt;em&gt;Acknowledgements&lt;/em&gt;&lt;br&gt; We wish to thank Holly, Maggie and Abby and the other participants at the 2013 University of Illinois Computer Science Summer G.A.M.E.S Camp for their game ideas, feedback and testing. &lt;br&gt; We wish to thank CJ Carey, John Vilk and the other developers of Doppio-JVM (a project by the &lt;a href=&#39;http://plasma.cs.umass.edu/&#39;&gt;Plasma research group at UMass&lt;/a&gt;)&lt;/a&gt; and BrowserFS for use of their software and their support of this project.&lt;br&gt; &lt;em&gt;Software development and bug contribution&lt;/em&gt;&lt;br&gt; Original software created by University of Illinois students and faculty, Chris Liu, Fabian Junge, James Kelly and Lawrence Angrave.&lt;br&gt;Additional Development done by Bharat Ponnaluri,Yi Gao, Julia Syi, Lavanya Iyer, and Noyan Baykal &lt;br/&gt;&quot;;</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">    $(refContainer).append(header);</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">    $(refContainer).append(para);</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">    <span class="pl-k">return</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>#bF<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">click</span>(closeClick);</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">}).<span class="pl-s3">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07111s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-70c417717c6c19f325c76c40de062c2e005f8cfec564283d7818b5b0fe8c0d27.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-9adb85255293205044bdded05300662b60a3fe712cb26ee7e5ca313a9f2ce3f7.js"></script>
      
      

  </body>
</html>

