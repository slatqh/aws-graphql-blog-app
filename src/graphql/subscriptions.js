/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
    id
    name
    posts {
      items {
        id
        message
        description
        createdAt
        owner
        title
      }
      nextToken
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
        id
        message
        description
        createdAt
        owner
        title
      }
      nextToken
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
        id
        message
        description
        createdAt
        owner
        title
      }
      nextToken
    }
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    message
    description
    createdAt
    owner
    postAuthor {
      id
      authID
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
      instument
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
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
    id
    message
    description
    createdAt
    owner
    postAuthor {
      id
      authID
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
      instument
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
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
    id
    message
    description
    createdAt
    owner
    postAuthor {
      id
      authID
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
      instument
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
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
      id
      message
      description
      createdAt
      owner
      postAuthor {
        id
        authID
        firstName
        lastName
        username
        phone
        email
        instument
      }
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
      authID
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
      instument
      userpost {
        nextToken
      }
      usercomment {
        nextToken
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
      id
      message
      description
      createdAt
      owner
      postAuthor {
        id
        authID
        firstName
        lastName
        username
        phone
        email
        instument
      }
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
      authID
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
      instument
      userpost {
        nextToken
      }
      usercomment {
        nextToken
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
      id
      message
      description
      createdAt
      owner
      postAuthor {
        id
        authID
        firstName
        lastName
        username
        phone
        email
        instument
      }
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
      authID
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
      instument
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    authID
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
    instument
    userpost {
      items {
        id
        message
        description
        createdAt
        owner
        title
      }
      nextToken
    }
    usercomment {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    authID
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
    instument
    userpost {
      items {
        id
        message
        description
        createdAt
        owner
        title
      }
      nextToken
    }
    usercomment {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    authID
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
    instument
    userpost {
      items {
        id
        message
        description
        createdAt
        owner
        title
      }
      nextToken
    }
    usercomment {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
