/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * The `Time` scalar type represents a Time value as
   * specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Time: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

/**
 * Creates, updates and returns a `Course` object.
 *
 * To update all you need to do is pass the course `id`.
 */
export type CourseCreateUpdateMutation = {
  __typename?: 'CourseCreateUpdateMutation';
  course?: Maybe<CourseType>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Deletes a course with the specified `id`,
 * and returns a success message if successful.
 */
export type CourseDeleteMutation = {
  __typename?: 'CourseDeleteMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CourseType = {
  __typename?: 'CourseType';
  /** A descriptive summary of the course. */
  description?: Maybe<Scalars['String']>;
  /** End date for course. Can be left null */
  endDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  /** Course name */
  name: Scalars['String'];
  progress?: Maybe<Scalars['Int']>;
  resources?: Maybe<Array<Maybe<ResourceType>>>;
  section?: Maybe<SectionType>;
  /** When will the user start taking this course */
  startDate?: Maybe<Scalars['Date']>;
};

/**
 * Creates or updates and returns a `Resource` object for a specific course.
 *
 * To update all you need to do is pass in the resource `id`.
 */
export type CreateUpdateResourceMuations = {
  __typename?: 'CreateUpdateResourceMuations';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  resource?: Maybe<ResourceType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum DaysOfTheWeek {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Creates or updates and returns a `TimeTableActivity` object.
   * If you want to perform an update, all you need to do is pass in
   * the activity `id`.
   */
  createUpdateActivity?: Maybe<TimeTableActivityCreateUpdateMutation>;
  /**
   * Creates, updates and returns a `Course` object.
   *
   * To update all you need to do is pass the course `id`.
   */
  createUpdateCourse?: Maybe<CourseCreateUpdateMutation>;
  /**
   * Creates or updates and returns a `Resource` object for a specific course.
   *
   * To update all you need to do is pass in the resource `id`.
   */
  createUpdateResource?: Maybe<CreateUpdateResourceMuations>;
  /**
   * Creates, updates and returns a `Section` object.
   *
   * To update all you need to do is pass in the section `id` as arguments.
   */
  createUpdateSection?: Maybe<SectionCreateUpdateMutation>;
  /**
   * Creates or updates and returns a `TimeTable` object.
   * To update all you need to do is pass the time_table `id`.
   */
  createUpdateTimeTable?: Maybe<TimeTableCreateUpdateMutation>;
  /**
   * Creates or updates and returns a `TodoItem` object.
   *
   * To update all you need to do is pass the item `id`.
   */
  createUpdateTodoItem?: Maybe<TodoItemCreateUpdateMutation>;
  /**
   * Create or updates and return a `Todo` object.
   * To update all you need to do is pass the todo `id`.
   */
  createUpdateTodoList?: Maybe<TodoListCreateUpdateMutation>;
  /**
   * Creates, updates and returns a `Topic` object for a particular course.
   * Note: a course `id` must be passed.
   *
   * To update, all you need to do is pass in the topic `id`.
   */
  createUpdateTopic?: Maybe<TopicCreateUpdateMutation>;
  /**
   * Deletes a course with the specified `id`,
   * and returns a success message if successful.
   */
  deleteCourse?: Maybe<CourseDeleteMutation>;
  /**
   * Deletes a resource  with the specified `id`,
   * and returns a success message if successful.
   */
  deleteResource?: Maybe<ResourceDeleteMuation>;
  /**
   * Deletes a section with the specified `id`,
   * and return a success message if successful
   */
  deleteSection?: Maybe<SectionDeleteMutation>;
  /**
   * Deletes a timetable with the specified `id`,
   * and returns a success message if successful.
   */
  deleteTimetable?: Maybe<TimeTableDeleteMutation>;
  /**
   * Deletes a timetable activity with the specified activity `id`,
   * and returns a success message if successful.
   */
  deleteTimetableActivity?: Maybe<TimeTableActivityDeleteMutation>;
  /**
   * Deletes a todo item with the specified item `id`,
   * and returns a success message if successful.
   */
  deleteTodoItem?: Maybe<TodoItemDeleteMutation>;
  /**
   * Deletes a todo_list with the specified todo_list `id`,
   * and returns a success message if successful.
   */
  deleteTodoList?: Maybe<TodoListDeleteMutation>;
  /**
   * Deletes a topic with the specified `id`,
   * and returns a success message if successful.
   */
  deleteTopic?: Maybe<TopicDeleteMutation>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /**
   * Creates, updates and returns a `Profile` object.
   * To perform an update, all you have to do is pass the profile `id`.
   */
  profileCreateUpdate?: Maybe<ProfileCreateUpdateMutation>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyToken>;
};


export type MutationCreateUpdateActivityArgs = {
  activity: Scalars['String'];
  activityId?: InputMaybe<Scalars['ID']>;
  day: DaysOfTheWeek;
  description?: InputMaybe<Scalars['String']>;
  endTime: Scalars['Time'];
  startTime: Scalars['Time'];
  timeTableId: Scalars['ID'];
};


export type MutationCreateUpdateCourseArgs = {
  courseId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  name?: InputMaybe<Scalars['String']>;
  sectionId?: InputMaybe<Scalars['ID']>;
  startDate?: InputMaybe<Scalars['Date']>;
};


export type MutationCreateUpdateResourceArgs = {
  audio?: InputMaybe<Scalars['Upload']>;
  courseId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<Scalars['Upload']>;
  image?: InputMaybe<Scalars['Upload']>;
  link?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  resourceId?: InputMaybe<Scalars['ID']>;
  video?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreateUpdateSectionArgs = {
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  name?: InputMaybe<Scalars['String']>;
  sectionId?: InputMaybe<Scalars['ID']>;
  startDate?: InputMaybe<Scalars['Date']>;
};


export type MutationCreateUpdateTimeTableArgs = {
  courseId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  sectionId?: InputMaybe<Scalars['ID']>;
  timeTableId?: InputMaybe<Scalars['ID']>;
  topicId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateUpdateTodoItemArgs = {
  activity?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['Time']>;
  itemId?: InputMaybe<Scalars['ID']>;
  startTime?: InputMaybe<Scalars['Time']>;
  todoListId: Scalars['ID'];
};


export type MutationCreateUpdateTodoListArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  public?: InputMaybe<Scalars['Boolean']>;
  todoId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateUpdateTopicArgs = {
  courseId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  topicId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteCourseArgs = {
  courseId: Scalars['ID'];
};


export type MutationDeleteResourceArgs = {
  resourceId: Scalars['ID'];
};


export type MutationDeleteSectionArgs = {
  sectionId: Scalars['ID'];
};


export type MutationDeleteTimetableArgs = {
  timeTableId: Scalars['ID'];
};


export type MutationDeleteTimetableActivityArgs = {
  activityId: Scalars['ID'];
};


export type MutationDeleteTodoItemArgs = {
  itemId: Scalars['ID'];
};


export type MutationDeleteTodoListArgs = {
  todoListId: Scalars['ID'];
};


export type MutationDeleteTopicArgs = {
  topicId: Scalars['ID'];
};


export type MutationPasswordChangeArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  token: Scalars['String'];
};


export type MutationProfileCreateUpdateArgs = {
  image?: InputMaybe<Scalars['Upload']>;
  profileId?: InputMaybe<Scalars['ID']>;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserNode>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Creates, updates and returns a `Profile` object.
 * To perform an update, all you have to do is pass the profile `id`.
 */
export type ProfileCreateUpdateMutation = {
  __typename?: 'ProfileCreateUpdateMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  profile?: Maybe<ProfileType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  id: Scalars['ID'];
  /** image url */
  imageUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns a course object with the specified `id`. */
  getCourseById?: Maybe<CourseType>;
  /** Returns all public Todo lists */
  getPublicTodos?: Maybe<Array<Maybe<TodoType>>>;
  /** Returns a resource with the given `id`. */
  getResourceById?: Maybe<ResourceType>;
  /** Returns resources for the course with the specified `id` */
  getResourcesByCourseId?: Maybe<Array<Maybe<ResourceType>>>;
  /** Returns a `TimeTableActivity` with the specified `id` */
  getTimeTableActivityById?: Maybe<TimeTableActivityType>;
  /**
   *         By default returns all the timetables owned by the logged in user,
   *         but if as the `id` parameter is passed,
   *         will filter the resoult by id.
   */
  getUserTimeTables?: Maybe<Array<Maybe<TimeTableType>>>;
  /** Returns a list of todos create by the logged in user */
  getUserTodoList?: Maybe<Array<Maybe<TodoType>>>;
  me?: Maybe<UserNode>;
  profile?: Maybe<ProfileType>;
  /** Returns all publicly available resources */
  publicResources?: Maybe<Array<Maybe<ResourceType>>>;
  user?: Maybe<UserType>;
  /** Resturs all courses created by the logged in user */
  userCourses?: Maybe<Array<Maybe<CourseType>>>;
  /** Resturs all topics created by the logged in user */
  userResources?: Maybe<Array<Maybe<ResourceType>>>;
  /** Resturs all sections created by the logged in user */
  userSections?: Maybe<Array<Maybe<SectionType>>>;
  /** Resturs all topics created by the logged in user */
  userTopics?: Maybe<Array<Maybe<TopicType>>>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryGetCourseByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetResourceByIdArgs = {
  resourceId: Scalars['ID'];
};


export type QueryGetResourcesByCourseIdArgs = {
  courseId: Scalars['ID'];
};


export type QueryGetTimeTableActivityByIdArgs = {
  activityId: Scalars['ID'];
};


export type QueryGetUserTimeTablesArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  status_Archived?: InputMaybe<Scalars['Boolean']>;
  status_SecondaryEmail?: InputMaybe<Scalars['String']>;
  status_Verified?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
  username_Icontains?: InputMaybe<Scalars['String']>;
  username_Istartswith?: InputMaybe<Scalars['String']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Deletes a resource  with the specified `id`,
 * and returns a success message if successful.
 */
export type ResourceDeleteMuation = {
  __typename?: 'ResourceDeleteMuation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ResourceType = {
  __typename?: 'ResourceType';
  audio?: Maybe<Scalars['String']>;
  course: CourseType;
  creator?: Maybe<UserType>;
  /** A description for this resource. */
  description?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  /** Url to an online resource, video, document e.t.c */
  link?: Maybe<Scalars['String']>;
  public: Scalars['Boolean'];
  video?: Maybe<Scalars['String']>;
};

/**
 * Creates, updates and returns a `Section` object.
 *
 * To update all you need to do is pass in the section `id` as arguments.
 */
export type SectionCreateUpdateMutation = {
  __typename?: 'SectionCreateUpdateMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  section?: Maybe<SectionType>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Deletes a section with the specified `id`,
 * and return a success message if successful
 */
export type SectionDeleteMutation = {
  __typename?: 'SectionDeleteMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SectionType = {
  __typename?: 'SectionType';
  dateAdded: Scalars['DateTime'];
  /** A descriptive summary for this section */
  description?: Maybe<Scalars['String']>;
  /** When is this section meant to end. Can be left empty */
  endDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  /** Name or Level for this section */
  name: Scalars['String'];
  /** When is this section meant to begin. */
  startDate?: Maybe<Scalars['Date']>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Creates or updates and returns a `TimeTableActivity` object.
 * If you want to perform an update, all you need to do is pass in
 * the activity `id`.
 */
export type TimeTableActivityCreateUpdateMutation = {
  __typename?: 'TimeTableActivityCreateUpdateMutation';
  activity?: Maybe<TimeTableActivityType>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum TimeTableActivityDay {
  /** Friday */
  Friday = 'FRIDAY',
  /** Monday */
  Monday = 'MONDAY',
  /** Saturday */
  Saturday = 'SATURDAY',
  /** Sunday */
  Sunday = 'SUNDAY',
  /** Thursday */
  Thursday = 'THURSDAY',
  /** Tuesday */
  Tuesday = 'TUESDAY',
  /** Wednesday */
  Wednesday = 'WEDNESDAY'
}

/**
 * Deletes a timetable activity with the specified activity `id`,
 * and returns a success message if successful.
 */
export type TimeTableActivityDeleteMutation = {
  __typename?: 'TimeTableActivityDeleteMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type TimeTableActivityType = {
  __typename?: 'TimeTableActivityType';
  /** Activity name */
  activity: Scalars['String'];
  /** Day for this activity */
  day: TimeTableActivityDay;
  /** A description of this activity. */
  description?: Maybe<Scalars['String']>;
  /** When does this activity end */
  endTime: Scalars['Time'];
  id: Scalars['ID'];
  /** When does this activity start */
  startTime: Scalars['Time'];
  /** What time table does this activity belong to. */
  timetable: TimeTableType;
};

/**
 * Creates or updates and returns a `TimeTable` object.
 * To update all you need to do is pass the time_table `id`.
 */
export type TimeTableCreateUpdateMutation = {
  __typename?: 'TimeTableCreateUpdateMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
  timeTable?: Maybe<TimeTableType>;
};

/**
 * Deletes a timetable with the specified `id`,
 * and returns a success message if successful.
 */
export type TimeTableDeleteMutation = {
  __typename?: 'TimeTableDeleteMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type TimeTableType = {
  __typename?: 'TimeTableType';
  activities?: Maybe<Array<Maybe<TimeTableActivityType>>>;
  /**             If this timetable is for a specific course, fill out this field */
  course?: Maybe<CourseType>;
  /** Describes what this timetable is for */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** If this timetable if for a section, fill out this field. */
  section?: Maybe<SectionType>;
  /**             If this timetable if for a specific topic, fill out this fiedld */
  topic?: Maybe<TopicType>;
};

/**
 * Creates or updates and returns a `TodoItem` object.
 *
 * To update all you need to do is pass the item `id`.
 */
export type TodoItemCreateUpdateMutation = {
  __typename?: 'TodoItemCreateUpdateMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  item?: Maybe<TodoItemType>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Deletes a todo item with the specified item `id`,
 * and returns a success message if successful.
 */
export type TodoItemDeleteMutation = {
  __typename?: 'TodoItemDeleteMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type TodoItemType = {
  __typename?: 'TodoItemType';
  /** Activity name */
  activity: Scalars['String'];
  /** Day of this activity */
  day?: Maybe<Scalars['Date']>;
  /** A description of this activity. */
  description?: Maybe<Scalars['String']>;
  /** When does this activity end */
  endTime?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  /** When does this activity start */
  startTime?: Maybe<Scalars['Time']>;
};

/**
 * Create or updates and return a `Todo` object.
 * To update all you need to do is pass the todo `id`.
 */
export type TodoListCreateUpdateMutation = {
  __typename?: 'TodoListCreateUpdateMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
  todo?: Maybe<TodoType>;
};

/**
 * Deletes a todo_list with the specified todo_list `id`,
 * and returns a success message if successful.
 */
export type TodoListDeleteMutation = {
  __typename?: 'TodoListDeleteMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type TodoType = {
  __typename?: 'TodoType';
  /** What is this list for. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<TodoItemType>>>;
  /** Name of this list */
  name: Scalars['String'];
};

/**
 * Creates, updates and returns a `Topic` object for a particular course.
 * Note: a course `id` must be passed.
 *
 * To update, all you need to do is pass in the topic `id`.
 */
export type TopicCreateUpdateMutation = {
  __typename?: 'TopicCreateUpdateMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
  topic?: Maybe<TopicType>;
};

/**
 * Deletes a topic with the specified `id`,
 * and returns a success message if successful.
 */
export type TopicDeleteMutation = {
  __typename?: 'TopicDeleteMutation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type TopicType = {
  __typename?: 'TopicType';
  course: CourseType;
  /** Short summary of the topic, or it's meanning */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Topic name, for a course */
  name: Scalars['String'];
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  archived?: Maybe<Scalars['Boolean']>;
  courseSet: Array<CourseType>;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  pk?: Maybe<Scalars['Int']>;
  profile?: Maybe<ProfileType>;
  resourceSet: Array<ResourceType>;
  secondaryEmail?: Maybe<Scalars['String']>;
  sectionSet: Array<SectionType>;
  timetableSet: Array<TimeTableType>;
  timetableactivitySet: Array<TimeTableActivityType>;
  todoSet: Array<TodoType>;
  topicSet: Array<TopicType>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

export type UserType = {
  __typename?: 'UserType';
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'Register', success?: boolean | null, errors?: any | null, token?: string | null, refreshToken?: string | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', signin?: { __typename?: 'ObtainJSONWebToken', token?: string | null, refreshToken?: string | null, success?: boolean | null, errors?: any | null, user?: { __typename?: 'UserNode', pk?: number | null, username: string, email: string, profile?: { __typename?: 'ProfileType', id: string, imageUrl?: string | null } | null } | null } | null };

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'RefreshToken', token?: string | null, payload?: any | null, success?: boolean | null, errors?: any | null, refreshToken?: string | null } | null };

export type CreateUpdateCourseMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  sectionId?: InputMaybe<Scalars['ID']>;
  startDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
  courseId?: InputMaybe<Scalars['ID']>;
}>;


export type CreateUpdateCourseMutation = { __typename?: 'Mutation', course?: { __typename?: 'CourseCreateUpdateMutation', success?: boolean | null, errors?: any | null, course?: { __typename?: 'CourseType', name: string, description?: string | null, startDate?: any | null, endDate?: any | null, progress?: number | null, id: string, section?: { __typename?: 'SectionType', id: string } | null } | null } | null };

export type CreateUpdateSectionMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  sectionId?: InputMaybe<Scalars['ID']>;
  startDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
}>;


export type CreateUpdateSectionMutation = { __typename?: 'Mutation', section?: { __typename?: 'SectionCreateUpdateMutation', success?: boolean | null, errors?: any | null, section?: { __typename?: 'SectionType', id: string, name: string, description?: string | null, startDate?: any | null, endDate?: any | null } | null } | null };

export type CreateResourceMutationVariables = Exact<{
  audio?: InputMaybe<Scalars['Upload']>;
  video?: InputMaybe<Scalars['Upload']>;
  document?: InputMaybe<Scalars['Upload']>;
  image?: InputMaybe<Scalars['Upload']>;
  description?: InputMaybe<Scalars['String']>;
  courseId: Scalars['ID'];
  resourceId?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
}>;


export type CreateResourceMutation = { __typename?: 'Mutation', resource?: { __typename?: 'CreateUpdateResourceMuations', success?: boolean | null, errors?: any | null, resource?: { __typename?: 'ResourceType', id: string, description?: string | null, link?: string | null, document?: string | null, audio?: string | null, image?: string | null, video?: string | null, creator?: { __typename?: 'UserType', id: string } | null, course: { __typename?: 'CourseType', id: string } } | null } | null };

export type DeleteCourseMutationVariables = Exact<{
  courseId: Scalars['ID'];
}>;


export type DeleteCourseMutation = { __typename?: 'Mutation', delete?: { __typename?: 'CourseDeleteMutation', success?: boolean | null, errors?: any | null } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'UserNode', pk?: number | null, username: string, email: string, profile?: { __typename?: 'ProfileType', id: string, imageUrl?: string | null } | null } | null };

export type UserCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserCoursesQuery = { __typename?: 'Query', courses?: Array<{ __typename?: 'CourseType', id: string, name: string, startDate?: any | null, endDate?: any | null, description?: string | null, progress?: number | null, section?: { __typename?: 'SectionType', id: string, startDate?: any | null } | null } | null> | null };

export type UserSectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserSectionsQuery = { __typename?: 'Query', sections?: Array<{ __typename?: 'SectionType', id: string, startDate?: any | null, endDate?: any | null, dateAdded: any, name: string, description?: string | null } | null> | null };

export type UserResourcesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserResourcesQuery = { __typename?: 'Query', resources?: Array<{ __typename?: 'ResourceType', id: string, description?: string | null, link?: string | null, document?: string | null, audio?: string | null, image?: string | null, video?: string | null, creator?: { __typename?: 'UserType', id: string } | null, course: { __typename?: 'CourseType', id: string } } | null> | null };

export type GetCourseByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCourseByIdQuery = { __typename?: 'Query', course?: { __typename?: 'CourseType', id: string, name: string, startDate?: any | null, endDate?: any | null, description?: string | null, progress?: number | null, section?: { __typename?: 'SectionType', id: string } | null, resources?: Array<{ __typename?: 'ResourceType', id: string, description?: string | null, link?: string | null, document?: string | null, audio?: string | null, image?: string | null, video?: string | null } | null> | null } | null };

export type GetResourceByCourseIdQueryVariables = Exact<{
  courseId: Scalars['ID'];
}>;


export type GetResourceByCourseIdQuery = { __typename?: 'Query', resources?: Array<{ __typename?: 'ResourceType', id: string, description?: string | null, link?: string | null, document?: string | null, audio?: string | null, image?: string | null, video?: string | null, course: { __typename?: 'CourseType', id: string }, creator?: { __typename?: 'UserType', id: string } | null } | null> | null };

export type ResourceByIdQueryVariables = Exact<{
  resourceId: Scalars['ID'];
}>;


export type ResourceByIdQuery = { __typename?: 'Query', resource?: { __typename?: 'ResourceType', id: string, description?: string | null, link?: string | null, document?: string | null, audio?: string | null, image?: string | null, video?: string | null, public: boolean } | null };


export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password1"}}},{"kind":"Argument","name":{"kind":"Name","value":"password2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"signin"},"name":{"kind":"Name","value":"tokenAuth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const CreateUpdateCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUpdateCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sectionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"createUpdateCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"sectionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sectionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<CreateUpdateCourseMutation, CreateUpdateCourseMutationVariables>;
export const CreateUpdateSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUpdateSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sectionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"section"},"name":{"kind":"Name","value":"createUpdateSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"sectionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sectionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<CreateUpdateSectionMutation, CreateUpdateSectionMutationVariables>;
export const CreateResourceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateResource"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"audio"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"video"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"document"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resourceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"link"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"public"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"resource"},"name":{"kind":"Name","value":"createUpdateResource"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"audio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"audio"}}},{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"Argument","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"link"}}},{"kind":"Argument","name":{"kind":"Name","value":"document"},"value":{"kind":"Variable","name":{"kind":"Name","value":"document"}}},{"kind":"Argument","name":{"kind":"Name","value":"public"},"value":{"kind":"Variable","name":{"kind":"Name","value":"public"}}},{"kind":"Argument","name":{"kind":"Name","value":"resourceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resourceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"video"},"value":{"kind":"Variable","name":{"kind":"Name","value":"video"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resource"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"video"}}]}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<CreateResourceMutation, CreateResourceMutationVariables>;
export const DeleteCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"delete"},"name":{"kind":"Name","value":"deleteCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<DeleteCourseMutation, DeleteCourseMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UserCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courses"},"name":{"kind":"Name","value":"userCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"progress"}}]}}]}}]} as unknown as DocumentNode<UserCoursesQuery, UserCoursesQueryVariables>;
export const UserSectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserSections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"sections"},"name":{"kind":"Name","value":"userSections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"dateAdded"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UserSectionsQuery, UserSectionsQueryVariables>;
export const UserResourcesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserResources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"resources"},"name":{"kind":"Name","value":"userResources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"video"}}]}}]}}]} as unknown as DocumentNode<UserResourcesQuery, UserResourcesQueryVariables>;
export const GetCourseByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourseByID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"getCourseById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"resources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"video"}}]}}]}}]}}]} as unknown as DocumentNode<GetCourseByIdQuery, GetCourseByIdQueryVariables>;
export const GetResourceByCourseIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetResourceByCourseID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"resources"},"name":{"kind":"Name","value":"getResourcesByCourseId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetResourceByCourseIdQuery, GetResourceByCourseIdQueryVariables>;
export const ResourceByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ResourceByID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resourceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"resource"},"name":{"kind":"Name","value":"getResourceById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"resourceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resourceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"public"}}]}}]}}]} as unknown as DocumentNode<ResourceByIdQuery, ResourceByIdQueryVariables>;