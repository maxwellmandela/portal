# Install, upgrade, or remove software

As described in the [Quick start](../quickstart/quickstart-intro.xml), you can download and install the latest version of the DFINITY Canister smart contract SDK package by running a command in a terminal shell. The topics in this section provide additional information about installing, upgrading, and removing the {sdk-short-name}.

[ROOT:page$download.adoc](ROOT:page$download.adoc)

## What gets installed

The {sdk-short-name} installation script installs several components in default locations on your local computer. The following table describes the development environment components that the installation script installs:

<!-- <table>
<colgroup>
<col style="width: 20%" />
<col style="width: 55%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Component</th>
<th style="text-align: left;">Description</th>
<th style="text-align: left;">Default location</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p>dfx</p></td>
<td style="text-align: left;"><p>DFINITY execution command-line interface (CLI)</p></td>
<td style="text-align: left;"><p><code>/usr/local/bin/dfx</code></p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>moc</p></td>
<td style="text-align: left;"><p>Motoko runtime compiler</p></td>
<td style="text-align: left;"><p><code>~/.cache/dfinity/versions/&lt;VERSION&gt;/moc</code></p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>replica</p></td>
<td style="text-align: left;"><p>Internet Computer local network binary</p></td>
<td style="text-align: left;"><p><code>~/.cache/dfinity/versions/&lt;VERSION&gt;/replica</code></p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>uninstall.sh</p></td>
<td style="text-align: left;"><p>Script to remove the {sdk-short-name} and all of its components</p></td>
<td style="text-align: left;"><p><code>~/.cache/dfinity/uninstall.sh</code></p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>versions</p></td>
<td style="text-align: left;"><p>Cache directory that contains a subdirectory for each version of the {sdk-short-name} you install.</p></td>
<td style="text-align: left;"><p><code>~/.cache/dfinity/versions</code></p></td>
</tr>
</tbody>
</table> -->

### Core components in a versioned directory

The `~/.cache/dfinity/versions` directory stores one or more versioned subdirectories of the {sdk-short-name}. Each versioned subdirectory contains the all of the directories and files required for a specific version of the {sdk-short-name}. For example, if you list the contents of the `~/.cache/dfinity/versions/0.9.3` directory you would see the following core components:

    total 349192
    drwxr-xr-x  17 pubs  staff       544 Mar 15 11:55 .
    drwxr-xr-x   4 pubs  staff       128 Mar 25 14:36 ..
    drwxr-xr-x  49 pubs  staff      1568 Mar 15 11:55 base
    drwxr-xr-x  20 pubs  staff       640 Mar 15 11:55 bootstrap
    -r-x------   1 pubs  staff  66253292 Mar 15 11:55 dfx
    -r-x------   1 pubs  staff  10496256 Dec 31  1969 ic-ref
    -r-x------   1 pubs  staff   5663644 Dec 31  1969 ic-starter
    -r-x------   1 pubs  staff      9604 Dec 31  1969 libcharset.1.0.0.dylib
    -r-x------   1 pubs  staff     38220 Dec 31  1969 libffi.7.dylib
    -r-x------   1 pubs  staff    668300 Dec 31  1969 libgmp.10.dylib
    -r-x------   1 pubs  staff    958248 Dec 31  1969 libiconv.2.4.0.dylib
    -r-x------   1 pubs  staff      4200 Dec 31  1969 libiconv.dylib
    -r-x------   1 pubs  staff     96900 Dec 31  1969 libz.1.2.11.dylib
    -r-x------   1 pubs  staff  15417684 Dec 31  1969 mo-doc
    -r-x------   1 pubs  staff  14634020 Dec 31  1969 mo-ide
    -r-x------   1 pubs  staff  15111508 Dec 31  1969 moc
    -r-x------   1 pubs  staff  49404128 Dec 31  1969 replica

### Motoko base directory

The `base` directory in the versioned subdirectory of the {sdk-short-name} contains the Motoko base library modules that are compatible with that version of the {sdk-short-name}. Because the Motoko base library is evolving rapidly, you should only use the base modules that are packaged with the version of the {sdk-short-name} that you have installed.

### Bootstrap directory

The `bootstrap` directory contains web server code that is deprecated. Beginning with version 0.7.0, agents can call an HTTP middleware server instead of the `bootstrap` code. This change enables canisters to respond to HTTP requests directly and operate more like traditional web-based applications.

## Upgrading to the latest version

If a new version of the {sdk-short-name} is available for download after your initial installation, you should install the updated version at your earliest convenience to get the latest fixes and enhancements as soon as possible. You can use the `dfx upgrade` command to compare the version you have currently installed against the latest version available for download. If a newer version of `dfx` is available, the `dfx upgrade` command automatically downloads and installs the latest version.

Note that you don’t need to uninstall the software before installing the new version. However, if you want to perform a clean installation rather than an upgrade, you can first uninstall the software as described in [Removing the software](#remove), then re-run the download and installation command.

For information about the features and fixes in the latest release, see the [Release notes](release-notes:sdk-release-notes.xml).

## Removing the software

When you install the {sdk-short-name}, the installation script puts the required binary files in a local directory and creates a cache. You can remove the SDK binaries and cache from your local computer by running the `uninstall` script located in the `.cache` folder.

For example:

    ~/.cache/dfinity/uninstall.sh

If you are uninstalling because you want to immediately reinstall a clean version of `dfx`, you can run the following command:

    ~/.cache/dfinity/uninstall.sh && sh -ci "$(curl -sSL https://sdk.dfinity.org/install.sh)"