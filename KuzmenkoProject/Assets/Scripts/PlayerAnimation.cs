using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerAnimation : MonoBehaviour
{
    public static readonly string[] idleAnimations =
    {
        "Idle_N",
        "Idle_NW",
        "Idle_W",
        "Idle_SW",
        "Idle_S",
        "Idle_SE",
        "Idle_E",
        "Idle_NE"
    };


    public static readonly string[] runAnimations =
    {
        "run_N",
        "run_NW",
        "run_W",
        "run_SW",
        "run_S",
        "run_SE",
        "run_E",
        "run_NE"
    };
    Animator animator;
    int lastDirection;

    private void Awake()
    {
        animator = GetComponent<Animator>();
    }

    public void SetDirection(Vector2 direction)
    {
        string[] directionArray = null;
        if (direction.magnitude < 0.01)
        {
            directionArray = idleAnimations;
            lastDirection = DirectionToIndex(direction);
            animator.Play(directionArray[lastDirection]);
        }
        else
        {
            directionArray = runAnimations;
            lastDirection = DirectionToIndex(direction);
            animator.Play(directionArray[lastDirection]);
        }
    }

    private int DirectionToIndex(Vector2 direction)
    {
        Vector2 norDir = direction.normalized;
        float step = 360 / 8;
        float offset = step / 2;
        float angle = Vector2.SignedAngle(Vector2.up, norDir);
        angle += offset;
        if(angle < 0)
        {
            angle += 360;
        }
        float stepCount = angle / step;

        return Mathf.FloorToInt(stepCount);
    }

}