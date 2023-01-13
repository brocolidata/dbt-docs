## Release Brocoli Data Catalog

In order to release a new version of Data Catalog : 
1. Create a branch following this naming pattern `deploy/vX.Y.Z` where `X.Y.Z` is a semantic version (example: `deploy/v1.0.0`)
2. Push your change to this branch and create a Pull Request (in our example `main` <- `deploy/v1.0.0`
3. Once you merge this PR, a GitHub Release will be created with the version defined in the branch name (in our example `Data Catalog v1.0.0`)
4. Now, you can change the value of `DATA_CATALOG_RELEASE_INDEX_URL` Data Catalog version in [`brocolib_utils/settings.py`](https://github.com/brocolidata/brocolib/blob/main/brocolib/utils/brocolib_utils/settings.py)
