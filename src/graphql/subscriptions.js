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
        title
      }
      nextToken
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
        title
      }
      nextToken
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
        title
      }
      nextToken
    }
  }
}
`;
