Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>'
});

// truyền dữ liệu xuống component con bằng prop
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
});

Vue.component('blog-post1', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')" >
        Phóng to
      </button>
      <div v-html="post.content"></div>
    </div>
  `
});

new Vue({
    el: '#components-demo',
    data: {
    },
});

new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'Giới thiệu về Vue' },
            { id: 2, title: 'Các khái niệm trong Vue' },
            { id: 3, title: 'Vue căn bản và vô cùng nâng cao' }
        ],
        postFontSize: 1
    }
});

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title: 'Giới thiệu về Vue' },
            { id: 2, title: 'Các khái niệm trong Vue' },
            { id: 3, title: 'Vue căn bản và vô cùng nâng cao' }
        ],
        postFontSize: 1
    }
});
