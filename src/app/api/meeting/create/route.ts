import { auth } from "@/auth";
import dbConnect from "@/database/connection";
import { Room } from "@/models/roomModel";
import { NextRequest, NextResponse } from "next/server";
import uniqid from "uniqid";
