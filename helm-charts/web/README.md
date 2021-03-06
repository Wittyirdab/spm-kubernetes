# web

## Introduction

* The `web` chart is a component of IBM Curam Social Program Management (SPM) Platform responsible for providing the static content for the SPM application on Apache HTTP Server.
* This component should not be deployed outside of the [`spm`](../spm) chart.

## Chart Details

* Deployment of a single pod listening on port 8443
* Exposed to the cluster using a service for potential load balancing

## Prerequisites

* Kubernetes 1.16 or later
* Helm 3.0.0 or later
* [`PodDisruptionBudgets`](https://kubernetes.io/docs/tasks/run-application/configure-pdb/) are recommended for high resiliency in an application during risky operations, such as draining a node for maintenance or scaling down a cluster.

### PodSecurityPolicy Requirements

Custom PodSecurityPolicy definition:

```
Not required as web server runs with the default restricted policy
```

### SecurityContextConstraints Requirements

Custom SecurityContextConstraints definition:

```
Not required as web server runs with the default restricted policy
```

## Configuration

See [README.md](../spm/README.md) in the `spm` umbrella chart.
