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
        id
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
        id
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
        id
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
    Author {
      name
      lastName
      phone
      email
      avatar {
        bucket
        key
        region
      }
      myPost {
        nextToken
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
    Author {
      name
      lastName
      phone
      email
      avatar {
        bucket
        key
        region
      }
      myPost {
        nextToken
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
    Author {
      name
      lastName
      phone
      email
      avatar {
        bucket
        key
        region
      }
      myPost {
        nextToken
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
      Author {
        name
        lastName
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
      Author {
        name
        lastName
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
      Author {
        name
        lastName
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
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    name
    lastName
    phone
    email
    avatar {
      bucket
      key
      region
    }
    myPost {
      items {
        message
        description
        createdAt
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    name
    lastName
    phone
    email
    avatar {
      bucket
      key
      region
    }
    myPost {
      items {
        message
        description
        createdAt
        id
        title
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    name
    lastName
    phone
    email
    avatar {
      bucket
      key
      region
    }
    myPost {
      items {
        message
        description
        createdAt
        id
        title
      }
      nextToken
    }
  }
}
`;
