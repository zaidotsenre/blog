#!/bin/bash
( cd server ; dotnet run ) &
( cd client ; npm start ) &
