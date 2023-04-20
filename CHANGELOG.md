## 1.2.1 (2023-04-20)

### Misc

- The package is now published using the `--provenance` flag.

## 1.2.0 (2023-04-03)

### Changed

- Originally, we allowed a quite wide range of versions in our Peer Dependencies. However, this also leads to the problem that the client needs to explicitly make sure they update the installed package versions regularly. To fix this, we will from now on always define more precise versions in our Peer Dependencies, such as `^1.2.3` instead of `^1.0.0`.

## 1.1.0 (2023-01-18)

### Added

- The React config now includes the `node-imports/no-node-import` rule.

## 1.0.0 (2022-12-23)

This is the very first stable release.
