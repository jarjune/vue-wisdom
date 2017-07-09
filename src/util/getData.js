/**
 * 获取书籍列表
 * @returns {[*,*,*,*,*,*]}
 */
export const getBookList = () => {
  return [{
    name: '深入浅出MyBatis技术原理与实战',
    url: 'https://images-cn.ssl-images-amazon.com/images/I/51WG8mcKcpL._AA218_.jpg'
  }, {
    name: '快学Scala',
    url: 'https://images-cn.ssl-images-amazon.com/images/I/513R3sWzvDL._AA218_.jpg'
  }, {
    name: 'Maven实战',
    url: 'https://images-cn.ssl-images-amazon.com/images/I/416GiUXb+PL._AA218_.jpg'
  }, {
    name: 'Hibernate实战(第2版)',
    url: 'https://images-cn.ssl-images-amazon.com/images/I/519pyZ2ol6L._AA218_.jpg'
  }, {
    name: '青少年科技创新丛书:Java与乐高机器人',
    url: 'https://images-cn.ssl-images-amazon.com/images/I/51q4dvfy+BL._AA218_.jpg'
  }, {
    name: '自己动手写网络爬虫(修订版)(附CD-ROM光盘)',
    url: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg'
  }]
}
/**
 * 验证用户名密码是否正确并获取用户信息
 * @param username
 * @param password
 */
export const getUserInfo = (username, password) => {
  if (username === 'jarjune' && password === '123456') {
    return {
      userId: 1,
      userImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      nickname: '林佳俊'
    }
  } else {
    return null
  }
}

export const getNoteListByUserId = (userId) => {
  if (userId === 1) {
    return [{
      noteId: 1,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-09'
    }, {
      noteId: 2,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-10'
    }, {
      noteId: 3,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-11'
    }, {
      noteId: 4,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-12'
    }, {
      noteId: 5,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-13'
    }, {
      noteId: 6,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-14'
    }, {
      noteId: 7,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-15'
    }]
  } else if (userId === 2) {
    return [{
      noteId: 11,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-09'
    }, {
      noteId: 12,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-10'
    }, {
      noteId: 13,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-11'
    }, {
      noteId: 14,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-12'
    }, {
      noteId: 15,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-13'
    }, {
      noteId: 16,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-14'
    }, {
      noteId: 17,
      noteTitle: '这是一篇笔记，记录着代码的人生',
      noteImg: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg',
      noteTime: '2017-07-15'
    }]
  }
}
