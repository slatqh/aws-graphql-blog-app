/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
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
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
