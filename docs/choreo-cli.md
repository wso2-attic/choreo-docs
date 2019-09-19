## Choreo CLI reference
- [login](#choreo-login) - login to Choreo
- [version](#choreo-version) - get Choreo client version information

### Choreo login

Choreo login command can be used login to Choreo. This is required to perform all the tasks that interacts with Choreo.

#### Synopsis

Login to Choreo.

```
login
```

#### Examples

```
$ chor login
```

#### Options

```
  -h, --help   help for version
```

[Back to Command List](#choreo-cli-commands)

### Choreo version

Choreo version command can be used to retrieve version information related to the Choreo client. In addition to the cli version name, Git commit hash, built date and target platform details are also printed.

#### Synopsis

Get Choreo client version information.

```
version
```

#### Examples

```
$ chor version
 Version:		0.0.1
 Git commit:		b086b964ae81e8277842fad625784672bb44a3a7
 Built:			2019-08-15T11:06:22+0530
 OS/Arch:		linux/amd64
```

#### Options

```
  -h, --help   help for version
```

[Back to Command List](#choreo-cli-commands)