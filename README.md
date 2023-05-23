## The Splainer!

This is a version of [Splainer](http://github.com/o19s/splainer) that allows running via Solr Admin UI.

With [npm installed](https://www.npmjs.com/)

```bash
npm install -g grunt-cli
npm install .
grunt dist
$ (cd dist && zip -r - *) > splainer.zip
unzip splainer.zip -d ~/path/to/solr/server/solr-webapp/webapp/splainer
```

See [main Splainer project](http://github.com/o19s/splainer) for more project informatio.n

### Changes to make it work in Solr Admin UI

See [diff from main project](https://github.com/o19s/splainer/compare/main...softwaredoug:solr-splainer:main#diff-18e01ac6a833fb1b20ffbad54f0ad8834a765e766f72cccda1e56cb942864d25R30)

* Changes communication with Solr to use GET instead af JSONP, same way the Admin UI communicates with Solr


## Who?

Another Hack by [Doug Turnbull](http://softwaredoug.com)

Created by [OpenSource Connections](http://opensourceconnections.com).

Thanks to all the [community contributors](https://github.com/o19s/splainer/graphs/contributors) for finding bugs and sharing fixes!.

## License

Released under [Apache 2](LICENSE.txt)
