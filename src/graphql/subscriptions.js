/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
    id
    name
    posts {
      items {
        message
        description
        createdAt
        owner
        id
        title
      }
      nextToken
    }
    userblog {
      id
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      userpost {
        nextToken
      }
      userblogs {
        nextToken
      }
      usercomments {
        nextToken
      }
      comment {
        id
        content
      }
    }
  }
}
`;
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
    id
    name
    posts {
      items {
        message
        description
        createdAt
        owner
        id
        title
      }
      nextToken
    }
    userblog {
      id
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      userpost {
        nextToken
      }
      userblogs {
        nextToken
      }
      usercomments {
        nextToken
      }
      comment {
        id
        content
      }
    }
  }
}
`;
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
    id
    name
    posts {
      items {
        message
        description
        createdAt
        owner
        id
        title
      }
      nextToken
    }
    userblog {
      id
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      userpost {
        nextToken
      }
      userblogs {
        nextToken
      }
      usercomments {
        nextToken
      }
      comment {
        id
        content
      }
    }
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    message
    description
    createdAt
    owner
    author {
      id
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      userpost {
        nextToken
      }
      userblogs {
        nextToken
      }
      usercomments {
        nextToken
      }
      comment {
        id
        content
      }
    }
    id
    images {
      bucket
      key
      region
    }
    title
    blog {
      id
      name
      posts {
        nextToken
      }
      userblog {
        id
        firstName
        lastName
        username
        phone
        email
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    message
    description
    createdAt
    owner
    author {
      id
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      userpost {
        nextToken
      }
      userblogs {
        nextToken
      }
      usercomments {
        nextToken
      }
      comment {
        id
        content
      }
    }
    id
    images {
      bucket
      key
      region
    }
    title
    blog {
      id
      name
      posts {
        nextToken
      }
      userblog {
        id
        firstName
        lastName
        username
        phone
        email
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    message
    description
    createdAt
    owner
    author {
      id
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      userpost {
        nextToken
      }
      userblogs {
        nextToken
      }
      usercomments {
        nextToken
      }
      comment {
        id
        content
      }
    }
    id
    images {
      bucket
      key
      region
    }
    title
    blog {
      id
      name
      posts {
        nextToken
      }
      userblog {
        id
        firstName
        lastName
        username
        phone
        email
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
    post {
      message
      description
      createdAt
      owner
      author {
        id
        firstName
        lastName
        username
        phone
        email
      }
      id
      images {
        bucket
        key
        region
      }
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
    commentAuthor {
      id
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      userpost {
        nextToken
      }
      userblogs {
        nextToken
      }
      usercomments {
        nextToken
      }
      comment {
        id
        content
      }
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
    post {
      message
      description
      createdAt
      owner
      author {
        id
        firstName
        lastName
        username
        phone
        email
      }
      id
      images {
        bucket
        key
        region
      }
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
    commentAuthor {
      id
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      userpost {
        nextToken
      }
      userblogs {
        nextToken
      }
      usercomments {
        nextToken
      }
      comment {
        id
        content
      }
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
    post {
      message
      description
      createdAt
      owner
      author {
        id
        firstName
        lastName
        username
        phone
        email
      }
      id
      images {
        bucket
        key
        region
      }
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
    commentAuthor {
      id
      firstName
      lastName
      username
      phone
      email
      avatar {
        bucket
        key
        region
      }
      userpost {
        nextToken
      }
      userblogs {
        nextToken
      }
      usercomments {
        nextToken
      }
      comment {
        id
        content
      }
    }
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    firstName
    lastName
    username
    phone
    email
    avatar {
      bucket
      key
      region
    }
    userpost {
      items {
        message
        description
        createdAt
        owner
        id
        title
      }
      nextToken
    }
    userblogs {
      items {
        id
        name
      }
      nextToken
    }
    usercomments {
      items {
        id
        content
      }
      nextToken
    }
    comment {
      id
      content
      post {
        message
        description
        createdAt
        owner
        id
        title
      }
      commentAuthor {
        id
        firstName
        lastName
        username
        phone
        email
      }
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    firstName
    lastName
    username
    phone
    email
    avatar {
      bucket
      key
      region
    }
    userpost {
      items {
        message
        description
        createdAt
        owner
        id
        title
      }
      nextToken
    }
    userblogs {
      items {
        id
        name
      }
      nextToken
    }
    usercomments {
      items {
        id
        content
      }
      nextToken
    }
    comment {
      id
      content
      post {
        message
        description
        createdAt
        owner
        id
        title
      }
      commentAuthor {
        id
        firstName
        lastName
        username
        phone
        email
      }
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    firstName
    lastName
    username
    phone
    email
    avatar {
      bucket
      key
      region
    }
    userpost {
      items {
        message
        description
        createdAt
        owner
        id
        title
      }
      nextToken
    }
    userblogs {
      items {
        id
        name
      }
      nextToken
    }
    usercomments {
      items {
        id
        content
      }
      nextToken
    }
    comment {
      id
      content
      post {
        message
        description
        createdAt
        owner
        id
        title
      }
      commentAuthor {
        id
        firstName
        lastName
        username
        phone
        email
      }
    }
  }
}
`;
