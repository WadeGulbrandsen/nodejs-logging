// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START logging_list_buckets_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource whose buckets are to be listed:
   *      "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
   *      "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]"
   *      "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]"
   *      "folders/[FOLDER_ID]/locations/[LOCATION_ID]"
   *  Note: The locations portion of the resource must be specified, but
   *  supplying the character `-` in place of [LOCATION_ID] will return all
   *  buckets.
   */
  // const parent = 'abc123'
  /**
   *  Optional. If present, then retrieve the next batch of results from the
   *  preceding call to this method. `pageToken` must be the value of
   *  `nextPageToken` from the previous response. The values of other method
   *  parameters should be identical to those in the previous call.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. The maximum number of results to return from this request.
   *  Non-positive values are ignored. The presence of `nextPageToken` in the
   *  response indicates that more results might be available.
   */
  // const pageSize = 1234

  // Imports the Logging library
  const {ConfigServiceV2Client} = require('@google-cloud/logging').v2;

  // Instantiates a client
  const loggingClient = new ConfigServiceV2Client();

  async function listBuckets() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await loggingClient.listBucketsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listBuckets();
  // [END logging_list_buckets_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));