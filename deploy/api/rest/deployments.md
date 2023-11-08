import OpenApiEndpoint from "@site/src/components/OpenApiEndpoint";

# Deployments

A deployment is a container for assets, environment variables, compiler options,
and other data related to a deployed serverless application.

## Get deployment details

<OpenApiEndpoint path="/deployments/{deploymentId}" method="get">
  Get details for a deployment with the given ID. This endpoint can be polled
  to track the results of a serverless app deployment.
</OpenApiEndpoint>

## Get deployment build logs

<OpenApiEndpoint path="/deployments/{deploymentId}/build_logs" method="get">
  Get build logs for the deployment specified by ID. You can use this
  information to check on the current status of a build, or to figure out
  what went wrong in the case of a failure.
  <br/><br/>
  The response format can be controlled by the <code>Accept</code> header. If&nbsp;
  <code>application/x-ndjson</code> is specified, the response will be a stream
  of newline-delimited JSON objects. Otherwise it will be a JSON array of
  objects.
</OpenApiEndpoint>

## Get deployment app logs

<OpenApiEndpoint path="/deployments/{deploymentId}/app_logs" method="get">
  Get execution logs of a deployment. This API can return either past logs or
  real-time logs depending on the presence of the <code>since</code> and&nbsp;
  <code>until</code> query parameters. If at least one of them is provided,
  past logs are returned. Otherwise real-time logs are returned.
  <br/><br/>
  Also, the response format can be controlled by the <code>Accept</code>&nbsp;
  header. If <code>application/x-ndjson</code> is specified, the response will
  be a stream of newline-delimited JSON objects. Otherwise, it will be a JSON
  array of objects.
</OpenApiEndpoint>