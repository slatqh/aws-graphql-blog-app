/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    name
    posts {
      items {
        id
        message
        ownerID
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
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    message
    ownerID
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
      instrument
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      message
      ownerID
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
        instrument
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    post {
      id
      message
      ownerID
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
        instrument
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
      instrument
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
        id
        message
        ownerID
        description
        createdAt
        owner
        title
      }
      commentAuthor {
        id
        authID
        firstName
        lastName
        username
        phone
        email
        instrument
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
    instrument
    userpost {
      items {
        id
        message
        ownerID
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      instrument
      userpost {
        nextToken
      }
      usercomment {
        nextToken
      }
    }
    nextToken
  }
}
`;
