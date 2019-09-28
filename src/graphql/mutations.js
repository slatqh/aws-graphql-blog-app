/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog($input: CreateBlogInput!) {
  createBlog(input: $input) {
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
export const updateBlog = `mutation UpdateBlog($input: UpdateBlogInput!) {
  updateBlog(input: $input) {
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
export const deleteBlog = `mutation DeleteBlog($input: DeleteBlogInput!) {
  deleteBlog(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
