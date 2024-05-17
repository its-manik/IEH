import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postApiVbyVersionActivityTypeActivityType: build.mutation<
      PostApiVbyVersionActivityTypeActivityTypeApiResponse,
      PostApiVbyVersionActivityTypeActivityTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/ActivityType/activity-type`,
        method: "POST",
        body: queryArg.activityTypeDto,
      }),
    }),
    getApiVbyVersionActivityTypeActivityType: build.query<
      GetApiVbyVersionActivityTypeActivityTypeApiResponse,
      GetApiVbyVersionActivityTypeActivityTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/ActivityType/activity-type`,
        params: {
          Size: queryArg.size,
          PageNumber: queryArg.pageNumber,
          SortBy: queryArg.sortBy,
          SortOrder: queryArg.sortOrder,
        },
      }),
    }),
    deleteApiVbyVersionActivityTypeActivityType: build.mutation<
      DeleteApiVbyVersionActivityTypeActivityTypeApiResponse,
      DeleteApiVbyVersionActivityTypeActivityTypeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/ActivityType/activity-type`,
        method: "DELETE",
        body: queryArg.body,
        params: { userId: queryArg.userId },
      }),
    }),
    getApiVbyVersionActivityTypeAndActivityTypeId: build.query<
      GetApiVbyVersionActivityTypeAndActivityTypeIdApiResponse,
      GetApiVbyVersionActivityTypeAndActivityTypeIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/ActivityType/${queryArg.activityTypeId}`,
      }),
    }),
    patchApiVbyVersionActivityTypeAndActivityTypeId: build.mutation<
      PatchApiVbyVersionActivityTypeAndActivityTypeIdApiResponse,
      PatchApiVbyVersionActivityTypeAndActivityTypeIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/ActivityType/${queryArg.activityTypeId}`,
        method: "PATCH",
        body: queryArg.activityTypeDto,
      }),
    }),
    postApiVbyVersionActivityTypeSearch: build.mutation<
      PostApiVbyVersionActivityTypeSearchApiResponse,
      PostApiVbyVersionActivityTypeSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/ActivityType/search`,
        method: "POST",
        body: queryArg.body,
        params: {
          Size: queryArg.size,
          PageNumber: queryArg.pageNumber,
          SortBy: queryArg.sortBy,
          SortOrder: queryArg.sortOrder,
        },
      }),
    }),
    getApiVbyVersionConnector: build.query<
      GetApiVbyVersionConnectorApiResponse,
      GetApiVbyVersionConnectorApiArg
    >({
      query: (queryArg) => ({ url: `/api/v${queryArg.version}/Connector` }),
    }),
    postApiVbyVersionConnector: build.mutation<
      PostApiVbyVersionConnectorApiResponse,
      PostApiVbyVersionConnectorApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/Connector`,
        method: "POST",
        body: queryArg.connector,
      }),
    }),
    putApiVbyVersionConnector: build.mutation<
      PutApiVbyVersionConnectorApiResponse,
      PutApiVbyVersionConnectorApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/Connector`,
        method: "PUT",
        body: queryArg.connector,
      }),
    }),
    deleteApiVbyVersionConnector: build.mutation<
      DeleteApiVbyVersionConnectorApiResponse,
      DeleteApiVbyVersionConnectorApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/Connector`,
        method: "DELETE",
        params: { id: queryArg.id },
      }),
    }),
    getApiVbyVersionConnectorAndId: build.query<
      GetApiVbyVersionConnectorAndIdApiResponse,
      GetApiVbyVersionConnectorAndIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/Connector/${queryArg.id}`,
      }),
    }),
    getError: build.query<GetErrorApiResponse, GetErrorApiArg>({
      query: () => ({ url: `/Error` }),
    }),
    getErrorCustom: build.query<
      GetErrorCustomApiResponse,
      GetErrorCustomApiArg
    >({
      query: (queryArg) => ({
        url: `/Error/custom`,
        params: {
          errorMessage: queryArg.errorMessage,
          stackTrace: queryArg.stackTrace,
          controllerName: queryArg.controllerName,
          actionName: queryArg.actionName,
        },
      }),
    }),
    postApiPayloadCreate: build.mutation<
      PostApiPayloadCreateApiResponse,
      PostApiPayloadCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Payload/create`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getApiVbyVersionWebhookEventHooks: build.query<
      GetApiVbyVersionWebhookEventHooksApiResponse,
      GetApiVbyVersionWebhookEventHooksApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/WebhookEvent/hooks`,
        params: {
          size: queryArg.size,
          pageNumber: queryArg.pageNumber,
          sortBy: queryArg.sortBy,
          sortOrder: queryArg.sortOrder,
        },
      }),
    }),
    postApiVbyVersionWebhookEventHooks: build.mutation<
      PostApiVbyVersionWebhookEventHooksApiResponse,
      PostApiVbyVersionWebhookEventHooksApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/WebhookEvent/hooks`,
        method: "POST",
        body: queryArg.webhookEventCreateDto,
      }),
    }),
    deleteApiVbyVersionWebhookEventHooks: build.mutation<
      DeleteApiVbyVersionWebhookEventHooksApiResponse,
      DeleteApiVbyVersionWebhookEventHooksApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/WebhookEvent/hooks`,
        method: "DELETE",
        body: queryArg.body,
      }),
    }),
    getApiVbyVersionWebhookEventHooksAndHookId: build.query<
      GetApiVbyVersionWebhookEventHooksAndHookIdApiResponse,
      GetApiVbyVersionWebhookEventHooksAndHookIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/WebhookEvent/hooks/${queryArg.hookId}`,
      }),
    }),
    patchApiVbyVersionWebhookEventSystemsAndSystemEventsEventHooksHookId:
      build.mutation<
        PatchApiVbyVersionWebhookEventSystemsAndSystemEventsEventHooksHookIdApiResponse,
        PatchApiVbyVersionWebhookEventSystemsAndSystemEventsEventHooksHookIdApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v${queryArg.version}/WebhookEvent/systems/${queryArg.system}/events/${queryArg.event}/hooks/${queryArg.hookId}`,
          method: "PATCH",
          body: queryArg.webhookPatch,
        }),
      }),
    getApiVbyVersionWebhookEventHooksSearch: build.query<
      GetApiVbyVersionWebhookEventHooksSearchApiResponse,
      GetApiVbyVersionWebhookEventHooksSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v${queryArg.version}/WebhookEvent/hooks/search`,
        body: queryArg.body,
        params: {
          size: queryArg.size,
          pageNumber: queryArg.pageNumber,
          sortOrder: queryArg.sortOrder,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as APIs };
export type PostApiVbyVersionActivityTypeActivityTypeApiResponse = unknown;
export type PostApiVbyVersionActivityTypeActivityTypeApiArg = {
  version: string;
  /** The activity type data to be created. */
  activityTypeDto: ActivityTypeDto;
};
export type GetApiVbyVersionActivityTypeActivityTypeApiResponse = unknown;
export type GetApiVbyVersionActivityTypeActivityTypeApiArg = {
  /** The number of activity types to retrieve per page. Default is 10. */
  size?: number;
  /** The page number to retrieve. Default is 1. */
  pageNumber?: number;
  /** The field to sort the activity types by.Default is Name */
  sortBy?: string;
  /** The sort order, either 'asc' or 'desc'.Default is asc */
  sortOrder?: string;
  version: string;
};
export type DeleteApiVbyVersionActivityTypeActivityTypeApiResponse = unknown;
export type DeleteApiVbyVersionActivityTypeActivityTypeApiArg = {
  /** Unique ID associated with user who has initiated delete. */
  userId?: string;
  version: string;
  /** List of activity type Id's */
  body: string[];
};
export type GetApiVbyVersionActivityTypeAndActivityTypeIdApiResponse = unknown;
export type GetApiVbyVersionActivityTypeAndActivityTypeIdApiArg = {
  /** The unique ID of the activity type to retrieve. */
  activityTypeId: string;
  version: string;
};
export type PatchApiVbyVersionActivityTypeAndActivityTypeIdApiResponse =
  unknown;
export type PatchApiVbyVersionActivityTypeAndActivityTypeIdApiArg = {
  /** The unique ID of the activity type to update. */
  activityTypeId: string;
  version: string;
  /** The updated activity type data. */
  activityTypeDto: ActivityTypeDto;
};
export type PostApiVbyVersionActivityTypeSearchApiResponse = unknown;
export type PostApiVbyVersionActivityTypeSearchApiArg = {
  /** The number of activity types to retrieve per page. Default is 10. */
  size?: number;
  /** The page number to retrieve. Default is 1. */
  pageNumber?: number;
  /** The field to sort the activity types by.Default is Name */
  sortBy?: string;
  /** The sort order, either 'asc' or 'desc'.Default is asc */
  sortOrder?: string;
  version: string;
  /** The dictionary containing search criteria. */
  body: {
    [key: string]: string;
  };
};
export type GetApiVbyVersionConnectorApiResponse =
  /** status 200 Success */ Connector[];
export type GetApiVbyVersionConnectorApiArg = {
  version: string;
};
export type PostApiVbyVersionConnectorApiResponse =
  /** status 200 Success */ Connector[];
export type PostApiVbyVersionConnectorApiArg = {
  version: string;
  connector: Connector;
};
export type PutApiVbyVersionConnectorApiResponse =
  /** status 200 Success */ Connector[];
export type PutApiVbyVersionConnectorApiArg = {
  version: string;
  connector: Connector;
};
export type DeleteApiVbyVersionConnectorApiResponse =
  /** status 200 Success */ Connector[];
export type DeleteApiVbyVersionConnectorApiArg = {
  id?: string;
  version: string;
};
export type GetApiVbyVersionConnectorAndIdApiResponse =
  /** status 200 Success */ Connector;
export type GetApiVbyVersionConnectorAndIdApiArg = {
  id: string;
  version: string;
};
export type GetErrorApiResponse = unknown;
export type GetErrorApiArg = void;
export type GetErrorCustomApiResponse = unknown;
export type GetErrorCustomApiArg = {
  errorMessage?: string;
  stackTrace?: string;
  controllerName?: string;
  actionName?: string;
};
export type PostApiPayloadCreateApiResponse = unknown;
export type PostApiPayloadCreateApiArg = {
  body: any;
};
export type GetApiVbyVersionWebhookEventHooksApiResponse = unknown;
export type GetApiVbyVersionWebhookEventHooksApiArg = {
  /** The number of webhooks to be returned. */
  size?: number;
  /** The page of webhooks to be returned. */
  pageNumber?: number;
  /** The column to sort the list. */
  sortBy?: string;
  /** The sorting order of the list. */
  sortOrder?: string;
  version: string;
};
export type PostApiVbyVersionWebhookEventHooksApiResponse = unknown;
export type PostApiVbyVersionWebhookEventHooksApiArg = {
  version: string;
  /** Input parameters to create a new webhook */
  webhookEventCreateDto: WebhookEventCreateDto;
};
export type DeleteApiVbyVersionWebhookEventHooksApiResponse = unknown;
export type DeleteApiVbyVersionWebhookEventHooksApiArg = {
  version: string;
  /** The list of IDs of the webhooks to delete. */
  body: string[];
};
export type GetApiVbyVersionWebhookEventHooksAndHookIdApiResponse = unknown;
export type GetApiVbyVersionWebhookEventHooksAndHookIdApiArg = {
  /** Unique identifier of the hook. */
  hookId: string;
  version: string;
};
export type PatchApiVbyVersionWebhookEventSystemsAndSystemEventsEventHooksHookIdApiResponse =
  unknown;
export type PatchApiVbyVersionWebhookEventSystemsAndSystemEventsEventHooksHookIdApiArg =
  {
    /** The system for data management it is "data". */
    system: string;
    /** The event identifier. */
    event: string;
    /** The webhook identifier. */
    hookId: string;
    version: string;
    /** The data containing the changes to apply to the webhook. */
    webhookPatch: WebhookPatch;
  };
export type GetApiVbyVersionWebhookEventHooksSearchApiResponse = unknown;
export type GetApiVbyVersionWebhookEventHooksSearchApiArg = {
  /** The number of items per page (optional). */
  size?: number;
  /** The page number (optional). */
  pageNumber?: number;
  /** The sort order (optional). */
  sortOrder?: string;
  version: string;
  /** Dictionary that has key as search column and value as search text */
  body: {
    [key: string]: string;
  };
};
export type ActivityTypeDto = {
  name?: string | null;
  /** Description of the activity type. */
  description?: string | null;
  /** The user who created the activity type. */
  createdBy?: string | null;
};
export type Activity = {
  id?: string | null;
  caption?: string | null;
  description?: string | null;
  type?: string | null;
  active?: boolean | null;
  activitiesMappings?: ActivitiesMapping[] | null;
};
export type ActivitiesMapping = {
  id?: string | null;
  activityId?: string | null;
  sourceConnectorId?: string | null;
  targetConnectorId?: string | null;
  activity?: Activity;
  sourceConnector?: Connector;
  targetConnector?: Connector;
};
export type Connector = {
  id?: string | null;
  name?: string | null;
  gatewayUrl?: string | null;
  connectorImage?: string | null;
  created?: string | null;
  createdBy?: string | null;
  securitySchemeId?: string | null;
  active?: boolean | null;
  activitiesMappingSourceConnectors?: ActivitiesMapping[] | null;
  activitiesMappingTargetConnectors?: ActivitiesMapping[] | null;
};
export type WebhookEventCreateDto = {
  folderURN?: string | null;
  projectId?: string | null;
  activityName?: string | null;
  source?: string | null;
  eventName?: string | null;
  callbackUrl?: string | null;
};
export type WebhookPatch = {
  /** Represents the status of the webhook. Can be "active" if the webhook is active, otherwise "inactive". */
  status?: string | null;
  /** JsonPath expression that can be used to filter the callbacks received by the webhook. */
  filter?: string | null;
  /** A user-defined JSON object used to store custom information for the webhook. The maximum size of the JSON object should be less than 1KB. */
  hookAttribute?: any | null;
  /** A secret token used to generate a hash signature passed along with notification requests to the callback URL. */
  token?: string | null;
  /** Flag to enable the hook for the automatic reactivation flow. */
  autoReactivateHook?: boolean | null;
  /** ISO8601 formatted date and time when the hook should expire and automatically be deleted. Providing null or an empty string updates the hook so that it never expires. */
  hookExpiry?: string | null;
};
export const {
  usePostApiVbyVersionActivityTypeActivityTypeMutation,
  useGetApiVbyVersionActivityTypeActivityTypeQuery,
  useDeleteApiVbyVersionActivityTypeActivityTypeMutation,
  useGetApiVbyVersionActivityTypeAndActivityTypeIdQuery,
  usePatchApiVbyVersionActivityTypeAndActivityTypeIdMutation,
  usePostApiVbyVersionActivityTypeSearchMutation,
  useGetApiVbyVersionConnectorQuery,
  usePostApiVbyVersionConnectorMutation,
  usePutApiVbyVersionConnectorMutation,
  useDeleteApiVbyVersionConnectorMutation,
  useGetApiVbyVersionConnectorAndIdQuery,
  useGetErrorQuery,
  useGetErrorCustomQuery,
  usePostApiPayloadCreateMutation,
  useGetApiVbyVersionWebhookEventHooksQuery,
  usePostApiVbyVersionWebhookEventHooksMutation,
  useDeleteApiVbyVersionWebhookEventHooksMutation,
  useGetApiVbyVersionWebhookEventHooksAndHookIdQuery,
  usePatchApiVbyVersionWebhookEventSystemsAndSystemEventsEventHooksHookIdMutation,
  useGetApiVbyVersionWebhookEventHooksSearchQuery,
} = injectedRtkApi;
