module.exports = {
  title: `Siyoon Jeon`,
  description: `Siyoon Jeon의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://cue28.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `cue28/cue28.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `전시윤`,
    bio: {
      role: `개발자`,
      description: ['꾸준히 성장하는', '편리한 세상을 꿈꾸는'],
      thumbnail: 'siyoonjeon.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/cue28`,
      linkedIn: ``,
      email: `siyoonjeonn@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '2021.04 ~ 2021.11',
        activity: 'sample',
        links: {
          github: '',
          post: 'https://heycue.tistory.com/',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        date: '2021.12.20 ~',
        activity: 'Frontend',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
      {
        title: 'Bucket Bingo',
        description: '빙고 게임을 활용한 목표 달성 웹 서비스입니다.',
        techStack: ['React', 'TypeScript', 'SCSS'],
        thumbnailUrl: 'bucketbingo.png',
        links: {
          post: 'https://siyoonjeon.notion.site/Bucket-Bingo-c37ad39acc6a40108f664a11132dc5a3',
          github: 'https://github.com/cue28/BucketBingo-Client',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        title: 'Code High',
        description: '알고리즘 학습을 돕고 더 나은 코드를 작성할 수 있도록 돕는 저장 플랫폼입니다.',
        techStack: ['React', 'JavaScript', 'SCSS', 'Webpack'],
        thumbnailUrl: 'codehigh.png',
        links: {
          post: 'https://codestates.notion.site/12-Code-High-e7d70bdf296449beb5af8350f83231f8',
          github: 'https://github.com/codestates/Code-High',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],
  },
};
