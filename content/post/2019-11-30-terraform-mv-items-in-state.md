---
title: "Move multiple items in terraform states"
date: 2019-12-01T00:50:02+09:00
categories:
  - dev
tags:
  - terraform
---

Some of `terraform state` commands can be used in case that modify the terraform state.
We use `terraform state mv` command to move items or rename items in that state, enabling efficient refactoring.

### terraform versions

```bash
$ terraform -v
Terraform v0.12.16
+ provider.aws v2.40.0
```

### All resources within a terraform state.
```sh
$ terraform state list
module.cloud_trails.data.aws_caller_identity.this
module.cloud_trails.aws_cloudtrail.this
module.cloud_trails.aws_s3_bucket.this
module.cloud_trails.aws_s3_bucket_policy.this
module.guard_duty.aws_guardduty_detector.this
```

### Example: Rename `module.cloud_trails.*` to `module.cloudtrail.*`

```sh
$ terraform state mv -dry-run 'module.cloud_trails' 'module.cloudtrail'
Would move "module.cloud_trails" to "module.cloudtrail"
```

### Example: Rename `module.cloud_trails.*.this` to `module.cloud_trails.*.that`

```sh
$ terraform state list module.cloud_trails
| awk '{print $1 " " $1}' \
| sed 's/this/that/2' \
| xargs -n2 bash -c 'terraform state mv -dry-run $0 $1'
Would move "module.cloud_trails.data.aws_caller_identity.this" to "module.cloud_trails.data.aws_caller_identity.that"
Would move "module.cloud_trails.aws_cloudtrail.this" to "module.cloud_trails.aws_cloudtrail.that"
Would move "module.cloud_trails.aws_s3_bucket.this" to "module.cloud_trails.aws_s3_bucket.that"
Would move "module.cloud_trails.aws_s3_bucket_policy.this" to "module.cloud_trails.aws_s3_bucket_policy.that"
```

You need to eliminate `-dry-run` to rename itemes in the state.

- [Command: state - Terraform by HashiCorp](https://www.terraform.io/docs/commands/state/index.html)
- [Command: state mv - Terraform by HashiCorp](https://www.terraform.io/docs/commands/state/mv.html)
