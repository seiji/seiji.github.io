---
title: "Retrieving ECS-Optimized-AMI from ssm using terraform"
date: 2019-12-03T00:38:56+09:00
categories:
  - dev
tags:
  - terraform
---

We can use a datasource of `aws_ami` to retrieve image id.

Now AWS SSM Parameter Store allows for querying the latest Amazon Linux AMI.
Therefore I try more simpler way.

## terraform versions

```bash
$ terraform -v
Terraform v0.12.16
+ provider.aws v2.40.0
```

### Create a module
```hcl
data aws_ssm_parameter this {
  name = "/aws/service/ecs/optimized-ami/${join("/", compact([var.os, var.architecture]))}/recommended"
}

variable os {
  default = "amazon-linux-2"
}

variable architecture {
  default = ""
}

output value {
  value = jsondecode(data.aws_ssm_parameter.this.value)
}

```
### Using the module
```hcl
terraform {
  required_version = "~> 0.12.0"
}

provider "aws" {
  region = "ap-northeast-1"
}

module amazon_linux_2 {
  source = "../"
}

output amazon_linux_2 {
  value = module.amazon_linux_2.value
}

```

```bash
Outputs:

amazon_linux_2 = {
  "ecs_agent_version" = "1.33.0"
  "ecs_runtime_version" = "Docker version 18.06.1-ce"
  "image_id" = "ami-0934e28fe3e390537"
  "image_name" = "amzn2-ami-ecs-hvm-2.0.20191114-x86_64-ebs"
  "os" = "Amazon Linux 2"
  "schema_version" = 1
}
```
https://github.com/seiji/terraform-aws-ecs-ami

- [Query for the latest Amazon Linux AMI IDs using AWS Systems Manager Parameter Store](https://aws.amazon.com/jp/blogs/compute/query-for-the-latest-amazon-linux-ami-ids-using-aws-systems-manager-parameter-store/)
- [Amazon ECS-optimized AMI Versions - Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-ami-versions.html)
- [Retrieving Amazon ECS-Optimized AMI Metadata - Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/retrieve-ecs-optimized_AMI.html)
